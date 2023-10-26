<template>
  <div id="app">
    <AppMenu v-if="this.$router.currentRoute.value.name != 'Login'"></AppMenu>
    <router-view />
  </div>
</template>

<script>
import AppMenu from "./components/menu/AppMenu.vue";
export default {
  components: {
    AppMenu,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&family=Noto+Serif:ital,wght@0,300;0,500;1,300;1,400&display=swap");
</style>
