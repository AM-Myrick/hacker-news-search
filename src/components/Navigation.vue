<template>
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
</template>

<script>
export default {
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