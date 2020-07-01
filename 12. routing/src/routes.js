// import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'

// lazy loading for User component

const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'))
    });
}

export const routes = [
    {
        path: '',
        component: Home,
        name: 'home'
    },
    {
        path: '/user',
        component: User,
        children: [
            {
                path: '',
                component: UserStart
            },
            {
                path: ':id',
                component: UserDetail,
                beforeEnter: (to, from, next) => {
                    // eslint-disable-next-line no-console
                    console.log('Inside route settings');
                    next();
                },
            },
            {
                path: ':id/edit',
                component: UserEdit,
                name: 'userEdit'
            },
            
        ]
    },
    // {
    //     path: '/redirect-me',
    //     redirect: '/'
    // },
    {
        path: '/redirect-me',
        redirect: {
            name: 'home'
        }
    },
    {
        path: '*',
        redirect: {
            name: 'home'
        }
    }
];
