import { createApp } from "vue";
import * as VueRouter from "vue-router";

import App from "./App.vue";
import HomePage from "./views/Home.vue";
import AboutPage from "./views/About.vue";
import RegisterPage from "./views/Register.vue";
import LoginPage from "./views/Login.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import UserService from "./services/UserService";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/about", name: "AboutPage", component: AboutPage },
  { path: "/register", name: "RegisterPage", component: RegisterPage },
  { path: "/login", name: "LoginPage", component: LoginPage },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

// * Defining routes that need authentication
const publicPages = ["/", "/register", "/login"];

router.beforeEach(async (to, from, next) => {
  const authRequired = !publicPages.includes(to.path);
  const token = localStorage.getItem("key") || "";
  const loggedIn = await UserService.checkKey(token);
  const auth = loggedIn.data["status"];

  // * Trying to access a page that needs log in
  if (authRequired) {
    if (auth != "OK") {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

createApp(App).use(ElementPlus).use(router).mount("#app");
