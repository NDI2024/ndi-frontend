import memBack from "assets/illustrations/memBack.png";
import {CardData} from "types/global";
import {useEffect} from "react";

interface Props {
    cardData: CardData,
    returned: boolean
}

export const MemoryCard = ({cardData, returned}: Props) => {

    useEffect(() => {
        console.log(returned)
    }, [returned])

    return (
        <>
            <div className="w-full flex items-center justify-center">
                {
                    !returned ?
                        <img src={memBack} alt="card back" className="md:h-24 max-sm:w-full cursor-pointer"/> :
                        <img src={cardData.imagePath} alt="card front" className="md:h-24 max-sm:w-full cursor-pointer"/>
                }
            </div>
        </>)
}