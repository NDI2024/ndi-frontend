import {CardData} from "types/global";
import {CardDetails} from "components/card/cardDetails";
import {Button} from "components/generic/button";
import {useTranslation} from "react-i18next";
import {GrPowerReset} from "react-icons/gr";

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
        <div className={'flex flex-col items-center'}>
            <div className={'flex flex-wrap gap-2 justify-center'}>
                {
                    cardsFiltered.map((card: CardData) => {
                        return <CardDetails card={card} key={card.id}/>
                    })
                }
            </div>
            <Button type={'button'} className={'mt-4 !w-fit text-white'} onClick={reloadDatas}>
                <GrPowerReset className={'mr-2 text-white'}/>
                    {
                    t('Label.Replay')
                }
            </Button>
        </div>
    )
}