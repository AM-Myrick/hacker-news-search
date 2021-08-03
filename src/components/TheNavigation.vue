<template>
  <b-row class="navigation py-2 mb-3">
    <b-col cols="4">
      <div class="brand">
        <router-link to="/search">
          <div class="text-dark text-monospace font-weight-bold d-inline">
            Search
            <br>
            Hacker News
          </div>
        </router-link>
      </div>
    </b-col>
    <b-col cols="4">
      <search-input />
    </b-col>
    <b-col cols="4">
      <b-nav pills>
        <b-nav-item 
          to="/search"
          :active="isSearchLinkActive">
          Search
        </b-nav-item>
        <b-nav-item
          to="/history"
          :active="isHistoryLinkActive">
          History
        </b-nav-item>
      </b-nav>
    </b-col>
  </b-row>
</template>

<script>
import SearchInput from './SearchInput.vue';
export default {
  components: { SearchInput },
  name: "Navigation",
  computed: {
    isSearchLinkActive() {
      return this.$route.name === "Search";
    },
    isHistoryLinkActive() {
      return this.$route.name === "History"
    },
  }
}
</script>

<style>
.navigation {
  background-color: #FF742B;
}

.navigation .nav {
  justify-content: flex-end;
}

.navigation .nav .nav-item .nav-link.active {
  background-color: black;
  color: white;
}

.navigation .nav .nav-item .nav-link {
  color: black;
}
</style>