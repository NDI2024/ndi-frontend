import {RouterProvider} from "react-router-dom";
import {router} from "routes/routes";
import React, {useEffect} from "react";
import {LoadingPage} from "pages/generic/LoadingPage";
import {Flowbite} from "flowbite-react";
import {FlowbiteCustomTheme} from "styles/flowbiteCustomTheme";
import {getJwtFromLocalStorage} from "utils/localStorage";
import {addBearerToken} from "utils/axios";
import {GetMe} from "services/user/user";
import {useDispatch} from "react-redux";
import {setUser} from "store/actions/userActions";
import {CardDescription} from "components/card/card-description";

export const App = () => {
    const dispatch = useDispatch()

    const [loading, setLoading] = React.useState<boolean>(false)

    const loginUser = async () => {
        const jwt = getJwtFromLocalStorage()
        setLoading(true)
        if (jwt) {
            addBearerToken(jwt)
            try {
                const me = await GetMe()
                const {data} = me
                dispatch(setUser(data))
            } catch (e) {

            } finally {
                setLoading(false)
            }
        } else {
            setLoading(false)
        }
    }

    useEffect(() => {
        Promise.all([loginUser()]).catch(e => {
            console.log(e)
        })
    }, [])

    if (loading) {
        return (
            <LoadingPage/>
        )
    }

    return (
        <Flowbite theme={{theme: FlowbiteCustomTheme}}>
            <CardDescription title="Je suis un titre d'exemple" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." image="/public/logo192.png" />
            <RouterProvider router={router}/>
        </Flowbite>
    )
}