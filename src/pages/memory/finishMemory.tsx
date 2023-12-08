import {CardData} from "types/global";
import {CardDetails} from "components/card/cardDetails";

interface Props {
    cards: CardData[]
}

export const FinishMemory = ({cards}: Props) => {
    const cardsFiltered = cards.filter((card, index, self) =>
        index === self.findIndex((t) => (
            t.id === card.id
        )))
    return (
        <div className={'flex flex-wrap gap-2 justify-center'}>
            {
                cardsFiltered.map((card: CardData) => {
                    return <CardDetails card={card} key={card.id}/>
                })
            }
        </div>
    )
}