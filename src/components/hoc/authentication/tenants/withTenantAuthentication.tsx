import React from "react";
import {Navigate} from "react-router-dom";
import {getRoutePathByName} from "utils/routes";
import {getUser} from "utils/user";

interface Props {
    Component: JSX.Element
}

export const WithTenantAuthentication = ({Component}: Props): JSX.Element => {
    const user = getUser()
    console.log(user)
    const loginPath = getRoutePathByName('app.login')

    return user ? <Navigate to={loginPath ?? ''}/> : <Navigate to={loginPath}/>
}