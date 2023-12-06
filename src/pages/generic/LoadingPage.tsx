import {LoadingSpinnerAnimation} from "components/loading/loadingSpinnerAnimation";

export const LoadingPage = () => {
    return (
        <div className={'w-screen h-screen bg-grey-600'}>
            <LoadingSpinnerAnimation/>
        </div>
    )
};