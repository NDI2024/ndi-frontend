import {SITE_NAME} from "data/constants";
import {FaTabletScreenButton} from "react-icons/fa6";
import {FaLeaf} from "react-icons/fa";

export const LogoWithName = () => {
    return (
        <div className={'flex items-center'}>
            <FaLeaf className={'text-2xl mr-2 text-primary-800'}/>
            <span className={'text-lg font-semibold text-gray-800'}>{SITE_NAME}</span>
        </div>
    )
};