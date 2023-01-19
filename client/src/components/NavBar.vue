<template>
  <el-menu id="navbar" mode="horizontal" default-actuve="0">
    <el-menu-item index="0">
      <router-link to="/">Home page</router-link>
    </el-menu-item>
    <el-menu-item index="1">
      <router-link to="/about">About</router-link>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="2">
      <router-link to="/register">Register</router-link>
    </el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>

<style>
a {
  text-decoration: none;
  user-select: none;
}
</style>
