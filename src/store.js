import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
const HACKER_NEWS_API = "http://hn.algolia.com/api/v1/search?query=";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    previousSearchTerms: [],
    searchResults: []
  },
  mutations: {
    addSearchResults(state, searchResults) {
      state.searchResults = searchResults;
    },
    addSearchTerm(state, newSearchTerm) {
      const updatedSearchTerms = [newSearchTerm, ...state.previousSearchTerms];
      state.previousSearchTerms = updatedSearchTerms;
    },
    removeItem(state, searchTerm) {
      const searchTermIndex = state.previousSearchTerms.indexOf(searchTerm);
      state.previousSearchTerms.splice(searchTermIndex, 1);
    }
  },
  actions: {
    async searchHackerNews({ commit }, searchTerm) {
      commit("addSearchTerm", searchTerm);
      const data = await axios.get(HACKER_NEWS_API + searchTerm);
      commit("addSearchResults", data);
    },
  }
});