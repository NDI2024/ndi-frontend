import React from "react";
import DropDown from "components/interactive/dropDown";
import {PiUserCircleThin} from "react-icons/pi";
import {useTranslation} from "react-i18next";
import {VscDebugDisconnect} from "react-icons/vsc";
import {useDispatch} from "react-redux";
import {getUser} from "utils/user";

export const ProfilButton = () => {

    const {t} = useTranslation()
    const dispatch = useDispatch()

    const user = getUser()

    return (
        <div className="flex items-center ml-3">
            <DropDown id={'user'}>
                <DropDown.Button>
                    <PiUserCircleThin className={'text-3xl cursor-pointer'}/>
                </DropDown.Button>
                <DropDown.Content>
                    <>
                        <div className="pb-2 px-2" role="none">
                            <p className="text-sm text-gray-900 dark:text-white" role="none">
                                {user?.Username}
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                               role="none">
                                {user?.Email}
                            </p>
                        </div>
                        <ul className="py-1" role="none">
                            <li>
                                <button
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem">
                                    <VscDebugDisconnect className={'inline-block mr-2'}/>
                                    {t('Label.Sign out')}
                                </button>
                            </li>
                        </ul>
                    </>
                </DropDown.Content>
            </DropDown>
        </div>
    )
}