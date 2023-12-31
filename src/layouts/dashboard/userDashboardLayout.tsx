import React from "react";
import "flowbite";
import Sidebar from "components/navigation/sidebar";
import {NavButton} from "components/navigation/navButton";
import {TiHome} from "react-icons/ti";
import {getRoutePathByName} from "utils/routes";
import {useTranslation} from "react-i18next";
import {FaTrophy} from "react-icons/fa";
import {TbError404Off} from "react-icons/tb";

interface Props {
    children?: React.ReactNode
}

export const UserDashboardLayout = ({children}: Props) => {
    const {t} = useTranslation()

    return (
        <>
            <Sidebar>
                <Sidebar.Content>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <NavButton to={getRoutePathByName('app.dashboard')} icon={<TiHome/>}
                                       text={t('Label.Home page')}/>
                        </li>
                        <li>
                            <NavButton to={getRoutePathByName('app.leaderboard')} icon={<FaTrophy/>} text={t('Label.Classment')}/>
                        </li>
                        <li>
                            <NavButton to={'/cpt'} icon={<TbError404Off />}  text={'Tetris'}/>
                        </li>
                    </ul>
                </Sidebar.Content>
            </Sidebar>
            <div className="h-full max-h-full overflow-y-auto md:pl-10 w-full">
                {children}
            </div>
        </>
    )
}