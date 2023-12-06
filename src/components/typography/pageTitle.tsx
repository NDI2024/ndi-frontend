import React from "react";
import {Link} from "react-router-dom";

interface Props {
    title: string;
    subtitle?: string;
    titleLink?: string;
}

const PageTitle: React.FC<Props> = ({title, subtitle, titleLink}: Props) => {
    return (
        <div className="flex flex-col justify-start items-start max-w-2xl mb-4 text-center">
            {
                titleLink ?
                    <Link to={titleLink}
                          className={'underline-offset-4 mb-2 decoration-gray-500 decoration-4 hover:underline'}>
                        {h1Title(title)}
                    </Link> :
                    h1Title(title)
            }
            {subtitle && (
                <p className="text-gray-500 text-left dark:text-gray-400 text-lg md:text-xl font-medium mb-2 ">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

const h1Title = (title: string) => {
    return (
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-gray-600 dark:text-gray-100 font-bold">
            {title}
        </h1>
    );
};

export default Object.assign(PageTitle, {h1Title})
