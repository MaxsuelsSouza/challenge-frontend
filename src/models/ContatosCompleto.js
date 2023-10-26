export default class ContatosCompleto{
    constructor(obj){
        obj = obj || {};
       this.id = obj.id;
       this.sobreNome = obj.sobreNome || "";
       this.numero = obj.numero || "";
       this.email = obj.email || "";
       this.cpf = obj.cpf || "";
       this.endereco = obj.endereco || "";
       this.redeSocial = obj.redeSocial || "";
       this.nota = obj.nota || "";

    }
    
}