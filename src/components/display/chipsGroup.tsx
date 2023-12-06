import React from "react";

interface Props {
    children?: React.ReactNode
}

export const ChipsGroup = ({children}: Props) => {
    return (
        <div className={'flex flex-wrap w-full h-fit p-2 border rounded relative'}>
            {children}
        </div>
    )
}