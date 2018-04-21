import App from '../views/App';
import Counter from '../components/Counter';
import Hello from '../components/Hello';
import Login from '../views/Login';
import Register from '../views/Register';
import Home from '../views/Home';
import Groups from '../views/Groups';
import Group from "../views/Group";


export default [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/hello',
                component: Hello,
            },
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
        ],
    },
];
