import React, {useEffect} from "react";
import {Navigate} from "react-router-dom";
import {getRoutePathByName} from "utils/routes";
import {useSelector} from "react-redux";

interface Props {
    Component: JSX.Element
}

export const WithTenantAuthentication = ({Component}: Props): JSX.Element => {
    const user = useSelector((state: any) => state.user.user)
    const loginPath = getRoutePathByName('app.login')

    return user !== null ? Component : <Navigate to={loginPath}/>
}