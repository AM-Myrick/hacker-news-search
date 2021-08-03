<template>
  <div class="search-result-list mb-3">
    <template v-if="searchResults.length > 0">
      <div 
        v-for="searchResult in searchResults" 
        :key="searchResult.created_at_i">
        <search-result
          :author="searchResult.author"
          :createdAtI="searchResult.created_at_i"
          :numberOfComments="searchResult.num_comments"
          :objectID="searchResult.objectID"
          :numberOfPoints="searchResult.points"
          :title="searchResult.title"
          :url="searchResult.url" />
      </div>
    </template>
    <div class="loading-animation" v-else>
      <b-spinner variant="dark" type="grow" label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SearchResult from './SearchResult.vue';
export default {
  name: "SearchResultList",
  components: {
    SearchResult
  },
  computed: {
    ...mapState(["searchResults"])
  }
}
</script>

<style>
.search-result-list .loading-animation {
  text-align: center;
  height: 100vh;
}
</style>