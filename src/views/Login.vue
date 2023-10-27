<template>
  <div class="box-login">
    <div class="logo">
      <h1>Agenda Blue</h1>
    </div>

    <div class="colotext">
      <BtnInput
        label="Email"
        placeHolder="exemplo@gmail.com"
        :value="usuario.email"
        @alteracao="populaEmail($event)"
      ></BtnInput>

      <BtnInput
        label="Senha"
        placeHolder="123456"
        type="password"
        @alteracao="populaSenha($event)"
      ></BtnInput>

      <input-buton value="Entrar" :callback="login"></input-buton>
    </div>
  </div>
</template>
<script>
import BtnInput from "../components/input/MeuInput.vue";
import InputButon from "../components/Botao/InputBotao.vue";
import usuarioService from "../service/usuario-service";
import Usuario from "../models/Usuario";
export default {
  name: "TelaLogin",
  components: {
    BtnInput,
    InputButon,
  },
  data() {
    return {
      usuario: new Usuario(),
    };
  },
  methods: {
    login() {
      if (!this.usuario.modeloValidoLogin()) {
        this.$swal({
          icon: "warning",
          title: "email obrigatorio e senha são obrigatórios",
        });
        return;
      }

      usuarioService
        .login(this.usuario.email, this.usuario.senha)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.$swal({
            icon: "success",
            title: `Usuario: ${response.data.email}, logado com sucesso!`,
          });
          this.$router.push({ name: "ControleDeContatos" });
        })
        .catch((error) => {
          this.$swal({
            icon: "error",
            title: ` ${error.data.mensageErro}`,
          });
        });
    },
    populaEmail(email) {
      this.usuario.email = email;
    },
    populaSenha(senha) {
      this.usuario.senha = senha;
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