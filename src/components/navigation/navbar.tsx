import React from "react";
import {LogoWithName} from "components/generic/logos/logoWithName";
import {ProfilButton} from "components/navigation/profilButton";

export const Navbar = () => {
    return (
        <nav
            className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <LogoWithName/>
                    </div>
                    <div className="flex items-center">
                        <ProfilButton/>
                    </div>
                </div>
            </div>
        </nav>
    )
}