<template>
  <ul>
    <li>
      <a @click="() => this.$router.push({ path: '/contatos' })">Contatos</a>
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/menu' })">Menu</a>
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/Login' })">Sair</a>
    </li>
  </ul>
</template>
<script>
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&family=Noto+Serif:ital,wght@0,300;0,500;1,300;1,400&display=swap");
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