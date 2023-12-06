import React, {useEffect} from "react";
import {findSlotOfType} from "utils/components";
import {initFlowbite} from "flowbite";

interface DropdownProps {
    id: string
    children: React.ReactNode
}

interface ChildrenProps {
    children: JSX.Element
}

const DropDown = ({id, children}: DropdownProps) => {

    const btn = findSlotOfType(children, Button)
    const content = findSlotOfType(children, Content)

    useEffect(() => {
        initFlowbite()
    }, [])

    return (
        <>
            <div data-dropdown-toggle={`dropdown-${id}`} className={'cursor-pointer'}>
                {btn}
            </div>
            <div
                className="z-50 hidden my-4 p-2 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id={`dropdown-${id}`}>
                {content}
            </div>
        </>
    )
}
const Button = ({children}: ChildrenProps) => {
    return children
}

const Content = ({children}: ChildrenProps) => {
    return children
}

export default Object.assign(DropDown, {Button, Content})