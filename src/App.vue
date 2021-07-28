<template>
  <div id="app">
    <b-container>
      <b-row>
        <navigation />
      </b-row>
      <b-row>
        <router-view/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation
  }
}
</script>
