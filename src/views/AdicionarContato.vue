<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulos">
          {{ modoCadastro ? "Adicionar" : "Editar" }} contatos
        </h1>
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2">
        <div class="form-group">
          <label for="id">Id</label>
          <input
            id="nome"
            v-model="contatos.id"
            type="text"
            disabled
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-10">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            id="nome"
            v-model="contatos.nome"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="numero">Telefone</label>
          <input
            id="numero"
            v-model="contatos.numero"
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
            v-model="contatos.email"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-group">
          <label for="nota">Nota</label>
          <textarea
            id="nota"
            v-model="contatos.nota"
            type="text"
            class="form-control"
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
        <button @click="excluirContato" class="btn btn-primary mr-2">
          excluir Contato
        </button>
      </div>
    </di>
  </div>
</template>
<script>
import Contatos from "../models/Contatos";
import contatosService from "../service/contatos-services";
export default {
  name: "Contato",
  data() {
    return {
      contatos: new Contatos(),
      modoCadastro: true,
    };
  },
  mounted() {
    let id = this.$route.params.id;
    if (!id) return;

    this.modoCadastro = false;
    this.obterContatoPorId(id);
  },
  methods: {
    obterContatoPorId(id) {
      contatosService
        .obterPorId(id)
        .then((response) => {
          this.contatos = new Contatos(response.data);
        })
        .catch((error) => {
          console.log(error);
          this.$swal({
            icon: "error",
            title: "Nao foi possivel obter o contato pelo " + id,
          });
        });
    },
    cancelarAcao() {
      this.Contatos = new Contatos();
      this.$router.push({ name: "ControleDeContatos" });
    },
    cadastrarContato() {
      if (!this.contatos.modeloValidoParaCadastro()) {
        this.$swal({
          icon: "warning",
          title: "Nome e numero é obrigatorio para cadastro!",
          animate: true,
        });
        return;
      }
      contatosService
        .cadastrar(this.contatos)
        .then(() => {
          this.$swal({
            icon: "success",
            title: "Contato cadastrado com sucesso!",
          });
          this.contatos = new Contatos();
          this.$router.push({ name: "ControleDeContatos" });
        })
        .catch((error) => {
          console.log(error);
          this.$swal({
            icon: "error",
            title: "Nao foi possivel cadastrar o contato.",
          });
        });
    },
    atualizaContato() {
      if (!this.contatos.modeloValidoParaAtualizar()) {
        this.$swal({
          icon: "warning",
          title: "Codigo e nome e obrigatorio para atualizaçao",
        });
        // alert("codigo e nome e obrigatorio para atualizaçao");
        return;
      }
      contatosService
        .atualizar(this.contatos)
        .then(() => {
          this.$swal({
            icon: "success",
            title: "Contato Atualizado com sucesso!",
          });
          this.$router.push({ name: "ControleDeContatos" });
        })
        .catch((error) => {
          console.log(error);
          this.$swal({
            icon: "error",
            title: "Nao foi possivel atualizar o contato.",
          });
        });
    },
    // excluirContato(contatos) {
    //   if (
    //     confirm(`Deseja excluir o produto "${contatos.id} - ${contatos.nome}"`)
    //   ) {
    //     contatosService
    //       .deletar(contatos.id)
    //       .then(() => {
    //         let indice = this.contatos.findIndex((c) => c.id == contatos.id);

    //         this.contatos.splice(indice, 1);
    //         this.$router.push({ name: "ControleDeContatos" });
    //         setTimeout(() => {
    //           alert("contato excluido com sucesso");
    //         }, 500);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }
    // },
    salvarContato() {
      this.modoCadastro ? this.cadastrarContato() : this.atualizaContato();
    },
  },
};
</script>