import {ImCross} from "react-icons/im";
import {FaCheck} from "react-icons/fa";

interface Props {
    value: boolean
}

export const BooleanCell = ({value}: Props) => {
    return (
        value ?
            <FaCheck className={'w-4 h-4 text-green-500'}/> :
            <ImCross className={'w-4 h-4 text-red-500'}/>
    )
}