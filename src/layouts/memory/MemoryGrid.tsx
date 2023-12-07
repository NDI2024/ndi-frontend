import React from "react";
import {MemoryCard} from "layouts/memory/MemoryCard";
import {CardData} from "types/global";

interface Props {
    cards: CardData[]
    selectCardFn: (card: CardData) => void
}

export const MemoryGrid = ({cards, selectCardFn}: Props) => {

    return (
        <>
            <div className="grid grid-cols-3 md:grid-cols-4 md:grid-rows-3 gap-4 p-2 md:w-2/3 mx-auto">
                {cards.map((card: CardData) => (
                    <button onClick={() => selectCardFn(card)}>
                        <MemoryCard key={card.title} cardData={card}/>
                    </button>
                ))}
            </div>
        </>
    )
}