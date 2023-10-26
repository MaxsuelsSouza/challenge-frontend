
import api from './api';

function obterTodos(){
    return new Promise((resolve, reject) => {
    return api.get('/produtos')
    .then(response => resolve(response))
    .catch(error => reject(error))
    });
}
function obterPorId(id){
    return new Promise((resolve, reject) => {
    return api.get(`/produtos/${id}`)
    .then(response => resolve(response))
    .catch(error => reject(error))
    });
}
function cadastrar(contato){
    return new Promise((resolve, reject) => {
    return api.post(`/produtos`, contato)
    .then(response => resolve(response))
    .catch(error => reject(error))
    });
}
function atualizar(contato){
    return new Promise((resolve, reject) => {
    return api.put(`/produtos/${contato.id}`, contato)
    .then(response => resolve(response))
    .catch(error => reject(error))
    });
}
function deletar(id){
    return new Promise((resolve, reject) => {
    return api.delete(`/produtos/${id}`)
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
