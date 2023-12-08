import {createBrowserRouter} from "react-router-dom";
import Home from "pages/Home";
import {UserLogin} from "pages/authent/UserLogin";
import {UserDashboard} from "pages/tenant/UserDashboard";
import {RedirectIfTenantAuthenticated} from "components/hoc/authentication/tenants/redirectIfTenantAuhenticated";
import {WithTenantAuthentication} from "components/hoc/authentication/tenants/withTenantAuthentication";
import {Page403} from "pages/errors/page403";
import {Page404} from "pages/errors/page404";
import {UserRegister} from "pages/authent/UserRegister";
import {MemoryMainPage} from "pages/memory/MemoryMainPage";
import {MemoryLeaderboard} from "pages/memory/MemoryLeaderboard";

export const Routes = [
    // App routes
    {path: '/', element: <Home/>, name: 'app.home'},
    {path: '/login', element: <RedirectIfTenantAuthenticated Component={<UserLogin/>}/>, name: 'app.login'},
    {path: '/register', element: <RedirectIfTenantAuthenticated Component={<UserRegister/>}/>, name: 'app.register'},
    {path: '/dashboard', element: <WithTenantAuthentication Component={<UserDashboard/>}/>, name: 'app.dashboard'},
    {path: '/memory', element: <RedirectIfTenantAuthenticated Component={<MemoryMainPage/>}/>, name: 'app.memory'},
    {path: '/leaderboard', element: <WithTenantAuthentication Component={<MemoryLeaderboard/>}/>, name: 'app.leaderboard'},

    // Errors routes
    {path: '/errors/403', element: <Page403/>, name: 'errors.403'},
    {path: '*', element: <Page404/>, name: 'errors.404'},
]

export const ApiRoutes = [
    // Authentication routes
    {path: '/users/login', name: 'auth.login'},
    {path: '/users/register', name: 'auth.register'},
    {path: '/me', name: 'auth.me'},
    {path: '/leaderboard', name: 'leaderboard.get' },
    {path: '/leaderboard/me', name: 'leaderboard.me.get' },
    {path: '/memorycards/:number', name: 'memorycards.get'},
    {path: '/scores', name: 'scores.post'},
    {path: '/question/:number', name: 'question.get'},
]

export const router = createBrowserRouter(Routes)