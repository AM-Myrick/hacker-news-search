<template>
  <div class="search-result mb-2">
    <div>
      <a 
        class="search-result-title mr-1 text-dark" 
        :href="postURL" 
        target="_blank">
        <span>{{ title }}</span>
      </a>
      <a 
        v-if="url"
        :href="storyURL" 
        target="_blank" 
        class="story-link text-muted">
        <span>({{ storyURL }})</span>
      </a>
    </div>
    <div class="story-meta d-flex">
      <div 
        :key="index"
        class="story-meta-item" 
        v-for="({ url, text }, index) in storyMetaValues">
        <a 
          class="text-muted" 
          :href="url" 
          target="_blank">
          <span>{{ text }}</span>
        </a>
        <span 
          v-if="index !== storyMetaValues.length - 1" 
          class="mx-1">|</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
const baseURL = "https://news.ycombinator.com/";

export default {
  name: "SearchResult",
  props: {
    author: { type: String, required: true },
    createdAtI: { type: Number, required: true },
    numberOfComments: { type: Number, required: true },
    objectID: { type: String, required: true },
    numberOfPoints: { type: Number, required: true },
    title: { type: String, required: true },
    url:  { type: String },
  },
  computed: {
    storyMetaValues() {
      return [
        { url: this.postURL, text: this.pointsText},
        { url: this.authorURL, text: this.author},
        { url: this.postURL, text: this.timeSinceStoryPosted},
        { url: this.postURL, text: this.commentsText},
      ];
    },
    storyURL() {
      return this.url;
    },
    authorURL() {
      return `${baseURL}user?id=${this.author}`;
    },
    postURL() {
      return `${baseURL}item?id=${this.objectID}`;
    },
    timeSinceStoryPosted() {
      return moment.unix(this.createdAtI).fromNow();
    },
    pointsText() {
      const hasOnePoint = this.numberOfPoints === 1;
      if (hasOnePoint) return `1 point`;
      else return `${this.numberOfPoints} points`;
    },
    commentsText() {
      const hasOneComment = this.numberOfComments === 1;
      if (hasOneComment) return `1 comment`;
      else return `${this.numberOfComments} comments`;
    }
  }
}
</script>

<style>
.search-result .search-result-title {
  text-decoration: none;
}

.search-result .story-link {
  font-size: 12px;
}

.search-result .story-meta {
  font-size: 10px;
}
</style>