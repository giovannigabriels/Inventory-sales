import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

router.beforeEach((to, from) => {
  if (to.name == "login" && localStorage.access_token) {
    return "/";
  }

  if (to.name == "home" && !localStorage.access_token) {
    return "/login";
  }
});

export default router;
