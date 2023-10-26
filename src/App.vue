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
</style>
