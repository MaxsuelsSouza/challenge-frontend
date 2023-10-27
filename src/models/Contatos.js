export default class Contatos{
    constructor(obj){
        obj = obj || {};
       this.id = obj.id;
       this.nome = obj.nome || "";
       this.numero = obj.numero || "";
       this.email = obj.email || "";
       this.nota = obj.nota || "";
    }
    modeloValidoParaCadastro(){
        return !! (this.nome && this.numero)
    }
    modeloValidoParaAtualizar(){
        return !! (this.id && this.nome && this.numero)
    }
}