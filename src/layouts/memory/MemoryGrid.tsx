import React from "react";
import {MemoryCard} from "layouts/memory/MemoryCard";

export const MemoryGrid = ({cards}: any) => {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 bg-blue-100">
                    {cards.map((card: any) => (
                        <MemoryCard key={card.title} cardData={card}/>
                    ))}
            </div>
        </>
    )
}