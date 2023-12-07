import memBack from "assets/illustrations/memBack.png";

export const MemoryCard = ({cardData}: any) => {
    return (
        <>
            <div className="w-full flex items-center justify-center">
                <img src={memBack} alt="card back" className="md:h-24 max-sm:w-full cursor-pointer"/>
            </div>
        </>)
}