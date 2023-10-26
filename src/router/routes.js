import AdicionarContato from '../views/AdicionarContato.vue';
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
        path: '/contatos', 
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
        title: 'menu',
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/contatos/novo', 
        name: 'NovoContatos',
        component: AdicionarContato,
        title: 'Adicionar Contato',
        meta: {
            requireAuth: false
        }
    },
    
];

  export default routes;