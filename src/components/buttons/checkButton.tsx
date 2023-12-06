import {FaCheck} from "react-icons/fa";
import React, {MouseEventHandler} from "react";

interface Props {
    children?: React.ReactNode
    checked: boolean
    value: string | number
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const CheckButton = ({checked, onClick, value, children}: Props) => {
    return (
        <button data-value={value}
            className={`flex w-full relative flex justify-center items-center py-2 text-base border-t ${checked ? 'bg-primary-600 text-white' : ''}`}
            onClick={onClick}
            type={'button'}>
            {
                checked && <FaCheck className={'absolute top-0 right-0 m-2 text-white'}/>
            }
            {children}
        </button>
    )
}