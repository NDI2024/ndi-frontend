import React from "react";
import {findSlotOfType} from "utils/components";

interface ChildrenProps {
    children: JSX.Element
}

const Sidebar = ({children}: ChildrenProps) => {

    const content = findSlotOfType(children, Content)

    return (
        <aside id="logo-sidebar"
               className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
               aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                {content}
            </div>
        </aside>
    )
};

const Content = ({children}: ChildrenProps) => {
    return children
}

export default Object.assign(Sidebar, {Content})