import ControleDeContatos from '../views/ControleDeContatos.vue';
import Login from '../views/Login.vue';
import MenuContatos from '../views/MenuContatos.vue';
const routes = [
    {
        path: '/Login',
        name: 'Login',
        component: Login,
        title: 'login',
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/', 
        name: 'ControleDeContatos',
        component: ControleDeContatos,
        title: 'Contatos',
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/menu', 
        name: 'MenuContatos',
        component: MenuContatos,
        title: 'Menu',
        meta: {
            requireAuth: false
        }
    },
];

  export default routes;