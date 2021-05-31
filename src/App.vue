<template>
  <div class="app">
    <home></home>
  </div>
</template>
<script>
import Home from "./pages/home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>
<style scoped lang="scss">
.app{
  color: gold;
}
</style>