import {useTranslation} from "react-i18next";
import {
    EmailValidation,
    InputWithLabel,
    PasswordValidation,
    TextValidation
} from "components/form/inputs/inputWithLabel";
import {useState} from "react";
import {Link} from "components/generic/link";
import {Button} from "components/generic/button";
import {LogoWithName} from "components/generic/logos/logoWithName";
import {Form} from "components/form/form";
import {FieldValues} from "react-hook-form";
import {toastError} from "utils/toast";
import {RegisterUser} from "services/user/tenant";
import {useDispatch} from "react-redux";
import {setUser} from "store/actions/userActions";
import {decodeJwt} from "utils/jwt";
import {getRoutePathByName} from "utils/routes";

export const UserRegister = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch()

    const [loginLoading, setLoginLoading] = useState(false)

    const submitForm = async (data: FieldValues) => {
        setLoginLoading(true)
        const {user, email, password, passwordConfirmation} = data
        if (password !== passwordConfirmation) {
            toastError(t('Error.Passwords do not match'))
            setLoginLoading(false)
            return
        }
        try {
            const req = await RegisterUser(user, password, email)

            switch (req.status) {
                case 422:
                    toastError(t('Error.Email no valid'))
                    break
                case 200:
                    const jwt = decodeJwt(req.data)
                    dispatch(setUser(jwt))
                    break
            }
        } catch (error) {
            toastError(t('Error.An error has occurred'))
        }
        setLoginLoading(false)
    }

    return (
        <>
            <section className={`bg-gray-50 dark:bg-gray-900`}>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <LogoWithName/>
                    </div>
                    <div
                        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                {
                                    t('Label.Register')
                                }
                            </h1>
                            <Form submitFn={data => submitForm(data)}>
                                <div className="space-y-4 md:space-y-6">
                                    <div>
                                        <InputWithLabel type={'text'} label={t('Label.User')}
                                                        placeholder={t('Label.User')}
                                                        name={'user'}
                                                        validationOptions={TextValidation}/>
                                    </div>
                                    <div>
                                        <InputWithLabel type={'email'} label={t('Label.Email')}
                                                        placeholder={t('Label.Email')}
                                                        name={'email'}
                                                        validationOptions={EmailValidation}/>
                                    </div>
                                    <div>
                                        <InputWithLabel type={'password'} label={t('Label.Password')}
                                                        placeholder={'••••••••'} name={'password'}
                                                        validationOptions={PasswordValidation}/>
                                    </div>
                                    <div>
                                        <InputWithLabel type={'password'} label={t('Label.Password confirmation')}
                                                        placeholder={'••••••••'} name={'passwordConfirmation'}
                                                        validationOptions={PasswordValidation}/>
                                    </div>
                                    <div className="flex items-center justify-end">
                                        <Link to={getRoutePathByName('app.login')}>
                                            {
                                                t('Text.Already have an account?')
                                            }
                                        </Link>
                                    </div>
                                    <Button type="submit" loading={loginLoading}>
                                        {t('Label.Register')}
                                    </Button>

                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}