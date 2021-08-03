import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
const HACKER_NEWS_API = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_SEARCH_HISTORY = ["slack", "apple", "google", "iphone", "android", "tiktok", "twitter", "teams"]

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTerms: DEFAULT_SEARCH_HISTORY,
    searchResults: []
  },
  mutations: {
    addSearchResults(state, searchResults) {
      state.searchResults = searchResults;
    },
    addSearchTerm(state, newSearchTerm) {
      if (newSearchTerm === "") return;
      const updatedSearchTerms = [newSearchTerm, ...state.searchTerms];
      state.searchTerms = updatedSearchTerms;
    },
    clearSearchResults(state) {
      state.searchResults = [];
    }
  },
  actions: {
    async searchHackerNews({ commit }, searchTerm) {
      commit("addSearchTerm", searchTerm);
      const { data: { hits } } = await axios.get(`${HACKER_NEWS_API}${searchTerm}&tags=story`);
      commit("addSearchResults", hits);
      return;
    },
  }
});