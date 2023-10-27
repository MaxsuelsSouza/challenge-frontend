<template>
  <div class="box-login">
    <div class="logo">
      <h1>Agenda Blue</h1>
      {{ usuario.email }}
    </div>

    <div class="colotext">
      <BtnInput
        label="Email"
        placeHolder="exemplo@gmail.com"
        v-model="usuario.email"
      ></BtnInput>

      <BtnInput label="Senha" placeHolder="123456" type="password"></BtnInput>

      <input-buton value="Entrar" :callback="login"></input-buton>
    </div>
  </div>
</template>
<script>
import BtnInput from "../components/input/MeuInput.vue";
import InputButon from "../components/Botao/InputBotao.vue";

// import usuarioService from "../service/usuario-service";
export default {
  name: "TelaLogin",
  components: {
    BtnInput,
    InputButon,
  },
  data() {
    return {
      usuario: {
        email: "",
        senha: "",
      },
      // usuario: new Usuario(),
    };
  },
  methods: {
    login() {
      // if (this.usuario.modeloValidoLogin()) {
      //   alert("email obrigatorio");
      //   return;
      // }
      // usuarioService
      //   .login(this.usuario.email, this.usuario.senha)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      this.$router.push({ name: "ControleDeContatos" });
    },
  },
};
</script>
<style scoped>
.box-login {
  width: 300px;
  margin: auto;
  border: 1px groove #2196f3;
  border-radius: 15px;
  background: var(--cor-primaria);
  box-shadow: 26px 26px 0px #1976d2, -26px -26px 0px #1979c7;
  margin-top: 100px;
  padding: 22px;
}
.logo {
  text-align: center;
  color: white;
}
.colotext {
  color: white;
}
</style>