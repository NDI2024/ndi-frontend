import {UserDashboardLayout} from "layouts/dashboard/userDashboardLayout";
import {MemoryGrid} from "layouts/memory/MemoryGrid";
import {CardDescription} from "components/card/card-description";
import {useEffect, useState} from "react";
import {CardData} from "types/global";

const data: CardData[] = [
    {
        id: "1",
        title: "titre1",
        description: "desc1",
        shortDescription: "desc1",
        imagePath: "https://picsum.photos/96/96",
        link: ""
    },
    {
        id: "2",
        title: "titre2",
        description: "desc2",
        shortDescription: "desc2",
        imagePath: "https://picsum.photos/96/96",
        link: ""
    },
    {
        id: "3",
        title: "titre2",
        description: "desc2",
        shortDescription: "desc2",
        imagePath: "https://picsum.photos/96/96",
        link: ""
    },
    {
        id: "4",
        title: "titre2",
        description: "desc2",
        shortDescription: "desc2",
        imagePath: "https://picsum.photos/96/96",
        link: ""
    },
    {
        id: "5",
        title: "titre1",
        description: "desc1",
        shortDescription: "desc1",
        imagePath: "https://picsum.photos/96/96",
        link: ""
    },
    {
        id: "6",
        title: "titre2",
        description: "desc2",
        shortDescription: "desc2",
        imagePath: "https://picsum.photos/96/96",
        link: ""
    },
    {
        id: "7",
        title: "titre2",
        description: "desc2",
        shortDescription: "desc2",
        imagePath: "https://picsum.photos/96/96",
        link: ""
    },
    {
        id: "8",
        title: "titre2",
        description: "desc2",
        shortDescription: "desc2",
        imagePath: "https://picsum.photos/96/96",
        link: ""
    },
    {
        id: "9",
        title: "titre1",
        description: "desc1",
        shortDescription: "desc1",
        imagePath: "https://picsum.photos/96/96",
        link: ""
    },
    {
        id: "10",
        title: "titre2",
        description: "desc2",
        shortDescription: "desc2",
        imagePath: "https://picsum.photos/96/96",
        link: ""
    },
    {
        id: "11",
        title: "titre2",
        description: "desc2",
        shortDescription: "desc2",
        imagePath: "https://picsum.photos/96/96",
        link: ""
    },
    {
        id: "12",
        title: "titre2",
        description: "desc2",
        shortDescription: "desc2",
        imagePath: "https://picsum.photos/96/96",
        link: ""
    },
]

export const MemoryMainPage = () => {
    const [cardChecked, setCardChecked] = useState<CardData | null>(null)
    const [cards, setCards] = useState<CardData[]>(data)
    const [cardsReturned, setCardsReturned] = useState<CardData[]>([])

    const addCardReturned = (card: CardData) => {
        if(cardsReturned.length < 2) {
            setCardsReturned([...cardsReturned, card])
        }else{
            setCardsReturned([card])
        }
    }

    return (
        <UserDashboardLayout>
            <MemoryGrid cards={cards} selectCardFn={(card) => setCardChecked(card)}/>
            {
                cardChecked &&
                <CardDescription title={cardChecked.title} description={cardChecked.shortDescription} image={cardChecked.imagePath}/>
            }
        </UserDashboardLayout>
    )
}