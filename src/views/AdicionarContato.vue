<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulos">Adicionar Contatos</h1>
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            id="nome"
            v-model="contatoC.nome"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-group">
          <label for="sobreNome">SobreNome</label>
          <input
            id="SobreNome"
            v-model="contatoC.sobreNome"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="numero">Numero</label>
          <input
            id="numero"
            v-model="contatoC.numero"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-5">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="contatoC.email"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="cpf">Cpf</label>
          <input
            id="cpf"
            v-model="contatoC.cpf"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-group">
          <label for="endereco">Endereço</label>
          <input
            id="endereco"
            v-model="contatoC.endereco"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-5">
        <div class="form-group">
          <label for="redeSocial">Rede Social</label>
          <input
            id="redeSocial"
            v-model="contatoC.redeSocial"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-12">
        <div class="form-group">
          <label for="nota">Nota</label>
          <textarea
            id="nota"
            v-model="contatoC.nota"
            type="text"
            class="form-control"
            row="4"
          ></textarea>
        </div>
      </div>
    </div>
    <di class="row">
      <div class="col-sm-12">
        <hr />
      </div>
      <div class="col-sm-12">
        <button @click="cancelarAcao" class="btn btn-default float-right">
          cancelar
        </button>
        <button @click="salvarContato" class="btn btn-primary float-right mr-2">
          salvar
        </button>
      </div>
    </di>
  </div>
</template>
<script>
import ContatosCompleto from "../models/ContatosCompleto";
export default {
  name: "Contato",
  data() {
    return {
      contatoC: new ContatosCompleto(),
    };
  },
  methods: {
    cancelarAcao() {
      this.contatoC = new ContatosCompleto();
      this.$router.push({ name: "ControleDeContatos" });
    },
    salvarContato() {},
  },
};
</script>