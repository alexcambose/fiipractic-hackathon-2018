import App from '../views/App';
import Counter from '../components/Counter';
import Hello from '../components/Hello';
import Login from '../views/Login';
import Register from '../views/Register';


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
            
        ],
    },
];
