import React from "react";
import "flowbite";
import Sidebar from "components/navigation/sidebar";
import {NavButton} from "components/navigation/navButton";
import {RiHomeFill} from "react-icons/ri";
import {TenantNavbar} from "components/navigation/tenantNavbar";
import {useTranslation} from "react-i18next";
import {FaBox, FaThList} from "react-icons/fa";
import {getRoutePathByName} from "utils/routes";

interface Props {
    children?: React.ReactNode
}

export const TenantDashboardLayout = ({children}: Props) => {
    const {t} = useTranslation()
    return (
        <>

            <TenantNavbar/>

            <Sidebar>
                <Sidebar.Content>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <NavButton to={getRoutePathByName('app.dashboard')} icon={<RiHomeFill/>} text={'Accueil'}/>
                        </li>
                        <li>
                            <NavButton to={getRoutePathByName('app.dashboard.categories')} icon={<FaThList/>}
                                       text={t('Label.Categories')}/>
                        </li>
                        <li>
                            <NavButton to={getRoutePathByName('app.dashboard.products')} icon={<FaBox/>}
                                       text={t('Label.Products')}/>
                        </li>
                    </ul>
                </Sidebar.Content>
            </Sidebar>

            <div className="p-4 sm:ml-64">
                <div className="p-4 mt-14">
                    {children}
                </div>
            </div>

        </>
    )
}