import {BsQuestionSquare} from "react-icons/bs";

export const MemoryCard = ({cardData}: any) => {
    return (
        <>
            <div className="p-4 bg-gray-50 max-w-2xl flex items-center justify-center">
                <BsQuestionSquare className="text-6xl" />
            </div>
        </>)
}