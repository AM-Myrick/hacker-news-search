<template>
  <b-col cols="12" class="search-page">
    <search-result-list />
  </b-col>
</template>

<script>
import SearchResultList from "../components/SearchResultList.vue";
export default {
  name: 'SearchPage',
  components: {
    SearchResultList
  },
}
</script>

<style>
.search-page {
  height: 100%;
}
</style>
