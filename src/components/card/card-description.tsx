import {FaPlusCircle} from "react-icons/fa";
import React, {useState} from "react";
import Drawer from "components/display/drawer";

interface Props {
    title: string
    description: string
    image: string
}

export const CardDescription = ({title, description, image}: Props) => {
    const [drawerOpened, setDrawerOpened] = useState<boolean>(false)

    function onCardClicked() {
        setDrawerOpened(true)
    }

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full user-select-none fade-in-up">
            <div className="flex flex-row w-full">
                <div className="flex flex-col w-1/5">
                    <img className="w-24 h-24 rounded-full mx-auto" src={image} alt="logo"/>
                </div>
                <div className="flex flex-col w-3/5">
                    <div className="text-center font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base text-center">{description.substring(0, 100)}...</p>
                </div>
                <div className="flex flex-col w-1/5">
                    <div className="text-center font-bold text-xl mb-2 cursor-pointer hover:text-blue-500 duration-75 text-blue-800 active:text-blue-900" onClick={onCardClicked}>
                        <FaPlusCircle />
                    </div>
                </div>
            </div>

            <Drawer headerTitle="" customOpened={drawerOpened} setCustomOpened={setDrawerOpened}>
                <Drawer.Body>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col w-full">
                            <div className="font-bold text-xl mb-2">{title}</div>

                            <img className="w-24 h-24 rounded-full mx-auto" src={image} alt="Image"/>

                            <p className="text-gray-700 text-base">{description}</p>
                        </div>
                    </div>
                </Drawer.Body>
            </Drawer>
        </div>
    )
}