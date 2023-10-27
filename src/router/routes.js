
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
            requireAuth: true
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
            requireAuth: true
        }
    },
    {
        path: '/contatos/editar/:id', 
        name: 'editarContatos',
        component: AdicionarContato,
        title: 'Editar Contato',
        meta: {
            requireAuth: true
        }
    },
    
];

  export default routes;