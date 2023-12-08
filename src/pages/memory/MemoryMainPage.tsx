import {UserDashboardLayout} from "layouts/dashboard/userDashboardLayout";
import {useEffect, useState} from "react";
import {CardData} from "types/global";
import {GetMemoryCards} from "services/memoryCard";
import {MemoryGrid} from "layouts/memory/MemoryGrid";
import {LoadingSpinnerAnimation} from "components/loading/loadingSpinnerAnimation";
import {CardDescription} from "components/card/card-description";
import {FinishMemory} from "pages/memory/finishMemory";

export const MemoryMainPage = () => {
    const [cardChecked, setCardChecked] = useState<CardData | null>(null)
    const [cards, setCards] = useState<CardData[]>([])
    const [cardsReturned, setCardsReturned] = useState<CardData[]>([])
    const [cardsFound, setCardsFound] = useState<CardData[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [gameFinished, setGameFinished] = useState<boolean>(false)

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
                setCardChecked(cardsReturned[1])
            }else{
                setCardChecked(null)
            }
            setTimeout(() => {
                setCardsReturned([])
            }, 500)
        }
        if (cardsFound.length === cards.length && cardsFound.length !== 0) {
            setGameFinished(true)
        }
    }, [cardsReturned])

    return (
        <UserDashboardLayout>
            {
                gameFinished ?
                    <FinishMemory cards={cardsFound}/> :
                    <>
                        <MemoryGrid cardsFound={cardsFound} returnedCards={cardsReturned} cards={cards}
                                    selectCardFn={addCardReturned}/>
                        {
                            loading ?
                                <LoadingSpinnerAnimation/> :

                                cardChecked &&
                                <div className={'fixed bottom-0 right-0 w-full'}>
                                    <CardDescription title={cardChecked.title}
                                                     description={cardChecked.shortDescription}
                                                     image={cardChecked.imagePath}/>
                                </div>
                        }
                    </>
            }
        </UserDashboardLayout>
    )
}