import {UserDashboardLayout} from "layouts/dashboard/userDashboardLayout";
import {MemoryGrid} from "layouts/memory/MemoryGrid";
import {CardDescription} from "components/card/card-description";
import {useEffect, useState} from "react";
import {CardData} from "types/global";
import {GetMemoryCards} from "services/memoryCard";
import {LoadingSpinnerAnimation} from "components/loading/loadingSpinnerAnimation";

export const MemoryMainPage = () => {
    const [cardChecked, setCardChecked] = useState<CardData | null>(null)
    const [cards, setCards] = useState<CardData[]>([])
    const [cardsReturned, setCardsReturned] = useState<CardData[]>([])
    const [cardsFound, setCardsFound] = useState<CardData[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const addCardReturned = (card: CardData) => {
        setCardsReturned([...cardsReturned, card])
    }

    const fetchCards = async () => {
        setLoading(true)
        try {
            const req = await GetMemoryCards()
            const cardsReq = [...req.data, ...req.data]
            const cardsReqShuffled = cardsReq.sort(() => Math.random() - 0.5)
            setCards(cardsReqShuffled.map((card: CardData, index: number) => {
                return {...card, index}
            }))
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        Promise.all([fetchCards()]).catch(e => console.log(e))
    }, [])

    useEffect(() => {
        if (cardsReturned.length > 2) {
            setCardsReturned(cardsReturned.slice(0, 2))
        }
        if (cardsReturned.length === 2) {
            if (cardsReturned[0].id === cardsReturned[1].id) {
                setCardsFound([...cardsFound, cardsReturned[0], cardsReturned[1]])
                // Add last returned card to cheked card
                setCardChecked(cardsReturned[1])
            }
            setTimeout(() => {
                setCardsReturned([])
            }, 500)
        }
    }, [cardsReturned])

    return (
        <UserDashboardLayout>
            <MemoryGrid cardsFound={cardsFound} returnedCards={cardsReturned} cards={cards}
                        selectCardFn={addCardReturned}/>
            {
                loading ?
                    <LoadingSpinnerAnimation/> :

                    cardChecked &&
                    <div className={'fixed bottom-0 right-0 w-full'}>
                        <CardDescription title={cardChecked.title} description={cardChecked.shortDescription}
                                         image={cardChecked.imagePath}/>
                    </div>

            }
        </UserDashboardLayout>
    )
}