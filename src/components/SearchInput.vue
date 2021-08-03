<template>
  <div class="search-form">
    <b-form-group class="m-0" id="search-form">
      <b-form-input 
        autofocus
        @update="searchHackerNews"
        id="search-input" 
        v-model="searchTerm" 
        debounce="500" />
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      searchTerm: "",
      searchSubmitted: false,
    }
  },
  watch: {
    "$route.params"({ searchTerm }) {
      if (searchTerm) {
        this.initializeSearch()
      }
    }
  },
  mounted() {
    this.initializeSearch();
  },
  computed: {
    termHasNotBeenSearched() {
      const { searchTerm } = this.$route.params;
      return this.searchTerm !== searchTerm;
    },
    isSearchPage() {
      return this.$route.name === "Search";
    }
  },
  methods: {
    async searchHackerNews() {
      const { searchTerm } = this;
      const shouldUpdateURL = (this.termHasNotBeenSearched || !this.isSearchPage) && searchTerm.length !== 0;
        
      await this.$store.dispatch("searchHackerNews", searchTerm);

      if (shouldUpdateURL) {
        this.$router.push({ name: "Search", params: { searchTerm } });
      }
    },
    initializeSearch() {
      const { params } = this.$route;
      const { searchTerm } = params;

      if (searchTerm) {
        if (this.termHasNotBeenSearched) {
          this.searchTerm = params.searchTerm;
          this.searchHackerNews();
        }
      }
      else {
        this.searchHackerNews();
      }
    }
  },
}
</script>