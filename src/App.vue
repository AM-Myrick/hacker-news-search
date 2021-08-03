<template>
  <div id="app">
    <b-container>
      <navigation />
      <b-row>
        <router-view />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navigation from "@/components/TheNavigation.vue";

export default {
  name: "App",
  components: {
    Navigation
  }
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  background-color: black;
}
.container {
  background-color: #F6F6EF;
}
</style>