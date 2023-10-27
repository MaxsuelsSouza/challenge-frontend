
import api from './api';

api.interceptors.request.use(
    async config => {
        config.headers = { 
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json',
          }
      return config;
    },
    error => {
      Promise.reject(error)
  });

function obterTodos(){
    return new Promise((resolve, reject) => {
    return api.get('/contatos')
    .then(response => resolve(response))
    .catch(error => reject(error))
    });
}
function obterPorId(id){
    return new Promise((resolve, reject) => {
    return api.get(`/contatos/${id}`)
    .then(response => resolve(response))
    .catch(error => reject(error))
    });
}
function cadastrar(contato){
    return new Promise((resolve, reject) => {
    return api.post(`/contatos`, contato)
    .then(response => resolve(response))
    .catch(error => reject(error))
    });
}
function atualizar(contato){
    return new Promise((resolve, reject) => {
    return api.put(`/contatos/${contato.id}`, contato)
    .then(response => resolve(response))
    .catch(error => reject(error))
    });
}
function deletar(id){
    return new Promise((resolve, reject) => {
    return api.delete(`/contatos/${id}`)
    .then(response => resolve(response))
    .catch(error => reject(error))
    });
}
export default {
    obterTodos,
    obterPorId,
    cadastrar,
    atualizar,
    deletar
}
