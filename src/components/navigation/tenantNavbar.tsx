import React from "react";
import {LogoWithName} from "components/generic/logos/logoWithName";
import {Button} from "components/generic/button";
import {Link} from "components/generic/link";
import {useTranslation} from "react-i18next";
import {FaArrowRight} from "react-icons/fa";
import {getRoutePathByName} from "utils/routes";

export const TenantNavbar = () => {
    const {t} = useTranslation()
    return (
        <nav
            className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <LogoWithName/>
                    </div>
                    <div className="flex items-center">
                        <Link to={getRoutePathByName('app.merchant.pos')}>
                            <Button type={'button'} className={'text-lg font-bold flex items-center'}>
                                {t('Label.Pos')}
                                <FaArrowRight className={'w-3 h-3 ml-2'}/>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}