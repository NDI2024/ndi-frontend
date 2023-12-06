import img403 from 'assets/illustrations/403.svg';
import PageTitle from "components/typography/pageTitle";
import {Button} from "components/generic/button";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

interface Props {
    redirectLink?: string
    redirectText?: string
}

export const Page403 = ({redirectLink, redirectText}: Props) => {
    const navigate = useNavigate()
    const {t} = useTranslation()

    return (
        <div className={'w-full h-full grid lg:grid-cols-2 max-md:grid-rows-2'}>
            <div className={'flex flex-col justify-center'}>
                <PageTitle title={t('Text.Refused access')}
                           subtitle={t('Text.You do not have the necessary rights to access this page')}></PageTitle>
                {
                    redirectLink ?
                        <Button type={'button'} className={'my-4 !w-fit'} onClick={() => navigate(redirectLink)}>
                            {redirectText}
                        </Button> : <></>
                }
            </div>
            <img src={img403} alt={'403'}/>
        </div>
    );
}