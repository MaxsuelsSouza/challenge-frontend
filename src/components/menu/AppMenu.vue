<template>
  <ul>
    <li>
      <a @click="() => this.$router.push({ path: '/' })">Contatos</a>
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/menu ' })">Menu</a>
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/Login' })">Sair</a>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;1,300;1,500&display=swap");

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--cor-primaria);
}
li {
  float: left;
  color: white;
}
li:first-child {
  margin-left: 40px;
}
li:last-child {
  float: right;
  margin-right: 10px;
}

li a {
  display: block;
  color: white;
  padding: 15px 17px;
  text-decoration: none;
  text-align: center;
}
li a:hover {
  background-color: var(--cor-secundaria);
  cursor: pointer;
}
</style>