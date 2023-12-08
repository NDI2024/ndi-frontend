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
        <div className="bg-white shadow-md rounded px-6 pt-4 pb-4 mb-4 w-full fade-in">
            <div className="flex flex-row w-full">
                <div className="flex flex-col w-1/5 max-sm:hidden">
                    <img className="w-24 h-24 rounded-full mx-auto" src={image} alt="logo"/>
                </div>
                <div className="flex flex-col w-3/5 mr-3">
                    <div className="text-left font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base text-left">{description.substring(0, 100)}...</p>
                </div>
                <div className="flex flex-col w-1/5">
                    <div className="text-center font-bold text-xl mb-2 cursor-pointer hover:text-blue-500 duration-75 text-blue-800 active:text-blue-900" onClick={onCardClicked}>
                        <FaPlusCircle />
                    </div>
                </div>
            </div>

            <Drawer headerTitle={title} customOpened={drawerOpened} setCustomOpened={setDrawerOpened}>
                <Drawer.Body>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col w-full">
                            <img className="w-24 h-24 rounded-full mx-auto" src={image} alt="Image"/>

                            <p className="text-gray-700 text-base">{description}</p>
                        </div>
                    </div>
                </Drawer.Body>
            </Drawer>
        </div>
    )
}