import React from "react";
import {Navigate} from "react-router-dom";
import {getRoutePathByName} from "utils/routes";
import {LoadingSpinnerAnimation} from "components/loading/loadingSpinnerAnimation";
import {getUser} from "utils/user";

interface Props {
    Component: JSX.Element
}

export const WithTenantAuthentication = ({Component}: Props): JSX.Element => {
    const user = getUser()
    const loginPath = getRoutePathByName('app.login')

    const [loading] = React.useState<boolean>(true)

    return user ? loading ? <LoadingSpinnerAnimation/> : Component : <Navigate to={loginPath ?? ''}/>
}