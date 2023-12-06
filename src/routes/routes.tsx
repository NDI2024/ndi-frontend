import {createBrowserRouter} from "react-router-dom";
import Home from "pages/Home";
import {UserLogin} from "pages/authent/UserLogin";
import {TenantDashboard} from "pages/tenant/TenantDashboard";
import {RedirectIfTenantAuthenticated} from "components/hoc/authentication/tenants/redirectIfTenantAuhenticated";
import {WithTenantAuthentication} from "components/hoc/authentication/tenants/withTenantAuthentication";
import {Page403} from "pages/errors/page403";
import {UserRegister} from "pages/authent/UserRegister";

export const Routes = [
    // App routes
    {path: '/', element: <Home/>, name: 'app.home'},
    {path: '/login', element: <RedirectIfTenantAuthenticated Component={<UserLogin/>}/>, name: 'app.login'},
    {path: '/register', element: <RedirectIfTenantAuthenticated Component={<UserRegister/>}/>, name: 'app.register'},
    {path: '/dashboard', element: <WithTenantAuthentication Component={<TenantDashboard/>}/>, name: 'app.dashboard'},

    // Errors routes
    {path: '/errors/403', element: <Page403/>, name: 'errors.403'},
]

export const ApiRoutes = [
    // Authentication routes
    {path: '/users/login', name: 'auth.login'},
    {path: '/users/register', name: 'auth.register'},
]

export const router = createBrowserRouter(Routes)