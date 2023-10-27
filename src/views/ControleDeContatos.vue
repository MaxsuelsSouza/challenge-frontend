<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulos" @click="abrirContato">Contatos</h1>
        <h1 class="titulo" @click="adicionarContato">+</h1>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-12">
        <BtnInput placeHolder="Buscar"></BtnInput>
        <table class="table table-hover">
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Numero</th>
            <th>Email</th>
            <th></th>
          </tr>
          <tbody>
            <!-- aqui tricar por editar contato -->
            <tr
              @click="editarContato(pessoa)"
              v-for="pessoa in contatos"
              :key="pessoa.id"
            >
              <td>{{ pessoa.id }}</td>
              <td>{{ pessoa.nome }}</td>
              <td>{{ pessoa.numero }}</td>
              <td>{{ pessoa.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import InputBotao from "../components/Botao/InputBotao.vue";
import BtnInput from "../components/input/MeuInput.vue";
import ContatosService from "../service/contatos-services";
import Contatos from "../models/Contatos";
export default {
  name: "ControleDeCliente",
  components: {
    InputBotao,
    BtnInput,
  },
  data() {
    return {
      contatos: [],
      busca: "",
    };
  },

  methods: {
    adicionarContato() {
      this.$router.push({ name: "NovoContatos" });
    },
    editarContato(pessoa) {
      // aqui poder fazer uma validaçao se quer excluir ou editar
      this.$router.push({ name: "editarContatos", params: { id: pessoa.id } });
    },
    excluirContato(contato) {
      if (
        confirm(`Deseja excluir o produto "${contato.id} - ${contato.nome}"`)
      ) {
        ContatosService.deletar(contato.id)
          .then(() => {
            let indice = this.contatos.findIndex((c) => c.id == contato.id);

            this.contatos.splice(indice, 1);
            setTimeout(() => {
              alert("contato excluido com sucesso");
            }, 500);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    obterTodosOsContatos() {
      ContatosService.obterTodos()
        .then((reponse) => {
          this.contatos = reponse.data.map((c) => new Contatos(c));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    this.obterTodosOsContatos();
  },
};
</script>

<style scoped>
h1:first-child {
  float: left;
}
.ordenarNomes {
  padding: 10px;
  margin-left: 20px;
}
.titulos {
  margin-top: 10px;
}
.table {
  cursor: pointer;
}
</style>
