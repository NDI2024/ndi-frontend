import React, {MouseEventHandler} from "react";
import {Spinner} from "components/generic/spinner";

interface Props {
    type: "button" | "submit" | "reset"
    children?: React.ReactNode
    className?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    loading?: boolean,
    color?: keyof typeof ButtonColors
}

export const ButtonColors = {
    primary: 'bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 dark:bg-secondary-600 dark:hover:bg-secondary-700',
    success: 'bg-success-600 hover:bg-success-700 dark:bg-success-600 dark:hover:bg-success-700',
    danger: 'bg-danger-600 hover:bg-danger-700 dark:bg-danger-600 dark:hover:bg-danger-700',
    warning: 'bg-warning-600 hover:bg-warning-700 dark:bg-warning-600 dark:hover:bg-warning-700',
    info: 'bg-info-600 hover:bg-info-700 dark:bg-info-600 dark:hover:bg-info-700',
    light: 'bg-gray-200 !text-gray-500 hover:bg-gray-300 dark:bg-gray-100 dark:hover:bg-gray-200',
    dark: 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-900',
}

export const Button = ({type, children, className, onClick, disabled = false, loading = false, color = 'primary'}: Props) => {

    return (
        <button type={type} disabled={disabled} onClick={disabled || loading ? void 0 : onClick}
                className={`w-full flex items-center justify-center text-white ${disabled || loading ? 'cursor-not-allowed opacity-75' : ''} focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ${className} ${disabled ? 'cursor-not-allowed' : ''} ${color ? ButtonColors[color] : ''} `}>
            {
                loading &&
                <Spinner size={4}/>
            }
            {children}
        </button>
    );
}