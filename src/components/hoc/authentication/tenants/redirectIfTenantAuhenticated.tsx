import React from "react";
import {Navigate} from "react-router-dom";
import {getRoutePathByName} from "utils/routes";
import {getUser} from "utils/user";

interface Props {
    Component: JSX.Element
}

export const RedirectIfTenantAuthenticated = ({Component}: Props): JSX.Element => {
    const user = getUser()
    const tenantPath = getRoutePathByName('app.dashboard')

    return user ? <Navigate to={tenantPath ?? ''}/> : Component
}