<template>
  <div id="navbar">
    <ul>
      <li>
        <router-link to="/">Home page</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/event/:id">Event</router-link>
      </li>
    </ul>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
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

ul {
  list-style-type: none;
  padding: 0px;
}
li {
  display: inline-block;
  margin: 0px 10px;
}
router-link {
  color: #42b983;
}
</style>
