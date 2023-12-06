import React from "react";
import {Link as ReactLink} from "react-router-dom";

interface Props {
    to: string;
    children?: React.ReactNode;
    className?: string;
}

export const Link = ({to, children, className, ...props}: Props) => {
    return (
        <div className={`text-sm font-medium text-primary-600 dark:text-primary-500 ${className}`}>
            <ReactLink to={to} {...props} className={'hover:underline'}>{children}</ReactLink>
        </div>
    )
}