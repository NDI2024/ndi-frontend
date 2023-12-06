import React from "react";
import {Page403} from "pages/errors/page403";
import {getUserRole} from "utils/user";

interface Props {
    children: React.ReactNode
    role?: string
    display403?: boolean
}

export const Can = ({
                        children,
                        display403,
                        role,
                    }: Props) => {

    const currentUserRole = getUserRole()

    const hasRole = currentUserRole === role

    // todo - make an error page for this
    if (hasRole) {
        return <>{children}</>
    } else {
        if (display403) {
            return <Page403/>
        }
        return <></>
    }
}