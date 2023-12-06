import React from "react";
import {Link, useLocation} from "react-router-dom";
import {comparePath} from "utils/routes";

interface Props {
    to: string;
    icon: JSX.Element;
    text: string;
    notification?: string;
    activeUrls?: Array<string>;
}

export const NavButton = ({to, icon, text, notification, activeUrls = []}: Props) => {
    const location = useLocation();

    const isActive = comparePath(to, location.pathname) || activeUrls.some(url => comparePath(url, location.pathname));
    return (
        <Link to={to}
              className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group ${isActive ? 'bg-primary-600 text-white font-semibold' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
            <div
                className={`text-lg transition duration-75 dark:text-gray-400  ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white'}`}>
                {icon}
            </div>
            <span className="flex-1 ml-3 whitespace-nowrap">{text}</span>
            {
                notification &&
                <span
                    className="inline-flex items-center justify-center px-2 py-1 ml-3 text-sm font-medium text-primary-800 bg-primary-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                {notification}
            </span>
            }
        </Link>
    )
}