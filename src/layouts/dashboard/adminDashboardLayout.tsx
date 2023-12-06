import React from "react";
import "flowbite";
import {Navbar} from "components/navigation/navbar";
import Sidebar from "components/navigation/sidebar";
import {NavButton} from "components/navigation/navButton";
import {TiHome} from "react-icons/ti";
import {getRoutePathByName} from "utils/routes";
import {ImUsers} from "react-icons/im";
import {useTranslation} from "react-i18next";

interface Props {
    children?: React.ReactNode
}

export const AdminDashboardLayout = ({children}: Props) => {
    const {t} = useTranslation()

    return (
        <>
            <Navbar/>
            <Sidebar>
                <Sidebar.Content>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <NavButton to={getRoutePathByName('admin.dashboard')} icon={<TiHome/>}
                                       text={t('Label.Home page')}/>
                        </li>
                        <li>
                            <NavButton to={getRoutePathByName('admin.clients.index')} icon={<ImUsers/>}
                                       text={t('Label.Clients')} activeUrls={[
                                getRoutePathByName('admin.clients.edit'),
                            ]}/>
                        </li>
                    </ul>
                </Sidebar.Content>
            </Sidebar>
            <div className="p-4 sm:ml-64 bg-gray-50 min-h-screen">
                <div className="p-4 mt-14">
                    {children}
                </div>
            </div>
        </>
    )
}