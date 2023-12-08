import {CardData} from "types/global";
import {useTranslation} from "react-i18next";
import {FaArrowRight} from "react-icons/fa";
import Drawer from "components/display/drawer";
import React from "react";

interface Props {
    card: CardData
}

export const CardDetails = ({card}: Props) => {
    const {t} = useTranslation()

    return (
        <>
            <div
                className="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={card.imagePath} alt=""/>
                <div className="p-5 items-stretch flex flex-col">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{
                        card.title
                    }</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{
                        card.shortDescription
                    }</p>
                    <Drawer headerTitle={card.title}>
                        <Drawer.Body>
                            <div className="flex flex-col w-full">
                                <div className="flex flex-col w-full">
                                    <img className="w-24 h-24 rounded-full mx-auto" src={card.imagePath} alt="Image"/>

                                    <p className="text-gray-700 text-base">{card.description}</p>
                                </div>
                            </div>
                        </Drawer.Body>
                        <Drawer.ToggleButton>
                            <button
                                className="inline-flex items-center w-fit px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {
                                    t('Label.Details')
                                }
                                <FaArrowRight className={'w-3.5 h-3.5 ms-2'}/>
                            </button>
                        </Drawer.ToggleButton>
                    </Drawer>
                </div>
            </div>
        </>
    )
}