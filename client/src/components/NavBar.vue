<template>
  <el-menu
    id="navbar"
    mode="horizontal"
    default-actuve="0"
    :router="routerValue"
  >
    <el-menu-item index="/" route="/">Home</el-menu-item>
    <el-menu-item index="/about" route="/about">About</el-menu-item>
    <el-menu-item index="/register" route="/register" v-if="!loggedIn"
      >Register
    </el-menu-item>
    <el-menu-item index="/login" route="/login" v-if="!loggedIn"
      >Login
    </el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",

  data() {
    return {
      routerValue: true,
      loggedIn: localStorage.getItem("key"),
    };
  },

  watch: {
    $route() {
      this.loggedIn = localStorage.getItem("key");
    },
  },
});
</script>

<style>
a {
  text-decoration: none;
  user-select: none;
}
</style>
