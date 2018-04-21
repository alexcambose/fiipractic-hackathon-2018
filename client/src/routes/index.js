import Counter from '../components/Counter';
import Hello from '../components/Hello';
import Login from '../views/Login';


export default [
    {
        path: '/',
        component: Login,
        routes: [
            {
                path: '/hello',
                component: Hello,
            },
            {
                path: '/login',
                component: Login,
            },
            
        ],
    },
];
