import React from "react";

interface Props {
    children?: React.ReactNode
}

export const SubTitle = ({children}: Props) => {
    return (
        <h2 className={'text-2xl font-semibold text-gray-700 dark:text-gray-200'}>
            {children}
        </h2>
    );
}