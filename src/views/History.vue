<template>
  <b-col cols="12" class="history">
    <template v-if="hasSearchTerms">
      <div 
        class="mb-2"
        v-for="(searchTerm, index) in searchTerms" 
        :key="index">
        <router-link 
          class="text-muted"
          :to="`/search/${searchTerm}`">
          <span>{{ searchTerm }}</span>
        </router-link>
      </div>
    </template>
    <p v-else>
      When you enter search terms, they'll be saved here for the length of your session.
    </p>
  </b-col>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "History",
  computed: {
    hasSearchTerms() {
      return this.searchTerms.length > 0;
    },
    ...mapState(["searchTerms"])
  },
  created() {
    this.clearSearchResults();
  },
  methods: {
    ...mapMutations(["clearSearchResults"])
  }
}
</script>

<style>
.history {
  height: 100vh;
}
</style>