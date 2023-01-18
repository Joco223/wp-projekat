import { createApp } from "vue";
import * as VueRouter from "vue-router";

import App from "./App.vue";
import HomePage from "./views/Home.vue";
import AboutPage from "./views/About.vue";
import EventSinglePage from "./views/EventSingle.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/about", name: "AboutPage", component: AboutPage },
  { path: "/event/:id", name: "EventSinglePage", component: EventSinglePage },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
