import { createApp } from "vue";
import * as VueRouter from "vue-router";

import App from "./App.vue";
import HomePage from "./views/Home.vue";
import AboutPage from "./views/About.vue";
import RegisterPage from "./views/Register.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/about", name: "AboutPage", component: AboutPage },
  { path: "/register", name: "RegisterPage", component: RegisterPage },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

// * Defining routes that need authentication
const publicPages = ["/", "/about", "/register"];

router.beforeEach((to, from, next) => {
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  // * Trying to access a page that needs log in
  if (authRequired && !loggedIn) {
    next("/");
  } else {
    next();
  }
});

createApp(App).use(ElementPlus).use(router).mount("#app");
