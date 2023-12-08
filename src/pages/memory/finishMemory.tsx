import {CardData} from "types/global";
import {CardDetails} from "components/card/cardDetails";
import {Button} from "components/generic/button";
import {useTranslation} from "react-i18next";

interface Props {
    cards: CardData[]
    reloadDatas: () => void
}

export const FinishMemory = ({cards, reloadDatas}: Props) => {
    const {t} = useTranslation()

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

            <Button type={'button'} className={'mt-4'} onClick={reloadDatas}>
                {
                    t('Label.Replay')
                }
            </Button>
        </div>
    )
}