import App from '../views/App';
import Login from '../views/Login';
import Register from '../views/Register';
import Home from '../views/Home';
import Groups from '../views/Groups';
import Group from "../views/Group";
import Profile from '../views/Profile';
export default [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/login',
                component: Login,
            },
            {
                path: '/register',
                component: Register,
            },
            {
                path: '/home',
                component: Home,
                routes: [
                    {
                        path: '/groups/:urlname',
                        component: Group,
                    },
                    {
                        exact: true,
                        path: '/groups',
                        component: Groups,
                    },

                ],
            },        
            {
                path: '/profile/:username',
                component: Profile,
            },         
            {
                path: '/settings',
                component: Profile,
            },         
        ],
    },
];
