<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulos">Contatos</h1>
        <h1 class="titulo" @click="adicionarContato">+</h1>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-12">
        <BtnInput placeHolder="Buscar"></BtnInput>
        <table class="table table-hover">
          <tr></tr>
          <tbody>
            <tr v-for="pessoa in contatos" :key="pessoa.id">
              <td>{{ pessoa.nome }}</td>
              <td></td>
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
    };
  },
  methods: {
    adicionarContato() {
      this.$router.push({ name: "NovoContatos" });
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
