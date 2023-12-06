import {createBrowserRouter} from "react-router-dom";
import Home from "pages/Home";
import {TenantLogin} from "pages/authent/TenantLogin";
import {TenantDashboard} from "pages/tenant/TenantDashboard";
import {RedirectIfTenantAuthenticated} from "components/hoc/authentication/tenants/redirectIfTenantAuhenticated";
import {WithTenantAuthentication} from "components/hoc/authentication/tenants/withTenantAuthentication";
import {Page403} from "pages/errors/page403";

export const Routes = [
    // App routes
    {path: '/', element: <Home/>, name: 'app.home'},
    {path: '/login', element: <RedirectIfTenantAuthenticated Component={<TenantLogin/>}/>, name: 'app.login'},
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