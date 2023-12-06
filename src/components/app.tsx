import {RouterProvider} from "react-router-dom";
import {router} from "routes/routes";
import React, {useEffect} from "react";
import {LoadingPage} from "pages/generic/LoadingPage";
import {Flowbite} from "flowbite-react";
import {FlowbiteCustomTheme} from "styles/flowbiteCustomTheme";

export const App = () => {

    const [loading, setLoading] = React.useState<boolean>(false)

    useEffect(() => {
    }, [])

    if (loading) {
        return (
            <LoadingPage/>
        )
    }

    return (
        <Flowbite theme={{theme: FlowbiteCustomTheme}}>
            <RouterProvider router={router}/>
        </Flowbite>
    )
}