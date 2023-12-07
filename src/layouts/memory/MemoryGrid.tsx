import React from "react";
import {MemoryCard} from "layouts/memory/MemoryCard";

export const MemoryGrid = ({cards}: any) => {

    return (
        <>
            <div className="grid grid-cols-3 md:grid-cols-4 md:grid-rows-4 gap-4 p-2 md:w-2/3 mx-auto">
                    {cards.map((card: any) => (
                        <MemoryCard key={card.title} cardData={card}/>
                    ))}
            </div>
        </>
    )
}