import React, {useEffect} from "react";
import {MemoryCard} from "layouts/memory/MemoryCard";
import {CardData} from "types/global";

interface Props {
    cards: CardData[]
    returnedCards: CardData[]
    selectCardFn: (card: CardData) => void
    cardsFound: CardData[]
}

export const MemoryGrid = ({cards, selectCardFn, returnedCards, cardsFound}: Props) => {

    const isReturned = (card: CardData) => {
        return returnedCards.includes(card) || cardsFound.includes(card)
    }

    return (
        <>
            <div className="grid grid-cols-3 md:grid-cols-4 md:grid-rows-3 gap-4 p-2 md:w-2/3 mx-auto">
                {cards.map((card: CardData) => (
                    <button className={'w-fit'} onClick={() => selectCardFn(card)}>
                        <MemoryCard key={card.title} cardData={card} returned={isReturned(card)} />
                    </button>
                ))}
            </div>
        </>
    )
}