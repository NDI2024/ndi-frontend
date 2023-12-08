import React, {useEffect, useState} from "react";
import {findSlotOfType} from "utils/components";
import {IoMdClose} from "react-icons/io";

interface Props {
    headerTitle: string
    children: React.ReactNode
    customOpened?: boolean
    setCustomOpened?: (customOpened: boolean) => void
}

const Drawer = ({headerTitle, customOpened, setCustomOpened, children}: Props) => {

    const [showDrawer, setShowDrawer] = useState(false)

    const btn = findSlotOfType(children, DrawerToggleButton)
    const body = findSlotOfType(children, DrawerBody)
    const footer = findSlotOfType(children, DrawerFooter)

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer)
        if (setCustomOpened) {
            setCustomOpened(!showDrawer)
        }
    }

    useEffect(() => {
        if (customOpened !== undefined) {
            setShowDrawer(customOpened)
        }
    }, [customOpened])

    return (
        <>
            <div className="text-center hover:cursor-pointer w-fit" onClick={toggleDrawer}>
                {btn}
            </div>

            <div
                className={`fixed flex flex-col top-0 right-0 z-[10001] h-screen p-4 transition-transform ${showDrawer ? '' : 'translate-x-full'} bg-white w-96 dark:bg-gray-800`}>
                <div>
                    <h5 id="drawer-right-label"
                        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
                        {headerTitle}
                    </h5>
                    <button type="button" onClick={toggleDrawer}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <IoMdClose className="w-5 h-5"/>
                        <span className="sr-only">Close menu</span>
                    </button>
                </div>
                <div className={'overflow-y-auto grow'}>
                    {body}
                </div>
                {
                    footer &&
                    <div>
                        {footer}
                    </div>
                }
            </div>

            <div onClick={toggleDrawer}
                 className={`fixed inset-0 z-[100] !m-0 !ml-0 !mr-0 !p-0 !pr-0 !pl-0 bg-black bg-opacity-50 ${showDrawer ? '' : 'hidden'}`}/>

        </>
    )
}

interface ChildrenProps {
    children: JSX.Element
}

const DrawerToggleButton = ({children}: ChildrenProps) => {
    return children
}

const DrawerBody = ({children}: ChildrenProps) => {
    return children
}

const DrawerFooter = ({children}: ChildrenProps) => {
    return children
}

export default Object.assign(Drawer, {ToggleButton: DrawerToggleButton, Body: DrawerBody, Footer: DrawerFooter})