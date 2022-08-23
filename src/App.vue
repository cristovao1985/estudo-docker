<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <template v-for="post in posts">
      {{ post }}
    </template>
  </div>
</template>

<script>
import api from "./api/index";
export default {
  name: "App",
  components: {},
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      api.getPosts().then((result) => {
        this.posts = result.data;
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
