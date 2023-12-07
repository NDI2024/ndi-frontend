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
            <RouterProvider router={router}/>
        </Flowbite>
    )
}