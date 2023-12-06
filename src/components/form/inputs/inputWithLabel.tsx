import {BsExclamationCircleFill} from "react-icons/bs";
import {FieldValues, useFormContext} from "react-hook-form";
import {findInputError} from "utils/forms";
import {useTranslation} from "react-i18next";

interface Props {
    type: 'text' | 'number' | 'email' | 'password' | 'date' | 'time' | 'checkbox'
    label: string
    name: string
    placeholder?: string
    disabled?: boolean
    validationOptions?: FieldValues
    min?: number
    max?: number
}

export const RequiredValidation = {
    required: {
        value: true,
        message: 'Error.EmptyInput'
    }
}

export const PasswordValidation = {
    required: {
        value: true,
        message: 'Error.EmptyInput'
    },
    minLength: {
        value: 8,
        message: 'Error.PasswordTooShort'
    },
    pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[\S]{8,}$/,
        message: 'Error.PasswordNotStrong'
    }
}

export const EmailValidation = {
    required: {
        value: true,
        message: 'Error.EmptyInput'
    },
    pattern: {
        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        message: 'Error.InvalidEmail'
    }
}

export const TextValidation = {
    required: {
        value: true,
        message: 'Error.EmptyInput'
    },
}

export const PositiveDecimalValidation = {
    min: {
        value: 0,
        message: 'Error.NegativeNumber'
    }
}
export const PositiveDecimalRequiredValidation = {
    ...PositiveDecimalValidation,
    ...RequiredValidation
}

export const InputWithLabel = ({
                                   type,
                                   label,
                                   name,
                                   placeholder = '',
                                   disabled,
                                   validationOptions = {},
                                   min,
                                   max
                               }: Props) => {

    const {
        register,
        formState: {errors},
    } = useFormContext()

    const inputError = findInputError(errors, name)
    const isInvalid = inputError !== undefined

    return (
        <div className="input-wrapper mb-3">
            <div className={'flex justify-between'}>
                <label htmlFor={name}
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {label}
                    {
                        validationOptions?.required && <sup className="text-red-600 text-sm">*</sup>
                    }
                </label>
                {isInvalid &&
                    <InputError message={inputError?.message}/>
                }
            </div>
            <input
                type={type}
                id={name}
                placeholder={placeholder}
                disabled={disabled}
                {
                    ...register(name, validationOptions)
                }
                {
                    ...(min !== undefined && {min})
                }
                {
                    ...(max !== undefined && {max})
                }
                className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${isInvalid ? 'border-red-600' : ''}`}
            />
        </div>
    );
}

const InputError = ({message}: { message: string }) => {
    const {t} = useTranslation()

    return (
        <div className={'flex bg-red-200 p-1 rounded w-fit items-center mb-1 text-red-600'}>
            <BsExclamationCircleFill className={'text-sm mr-2'}/>
            <p className=" font-bold w-fit text-xs">{t(message)}</p>
        </div>
    )
}