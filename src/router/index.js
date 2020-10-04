import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Details from "../views/Details";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/movies/:id",
    name: "details",
    component: Details
  },
  {
    path: "*",
    name: "default",
    component: NotFound
  },
  {
    path: "/movies",
    name: "movies",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
