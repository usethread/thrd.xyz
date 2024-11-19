import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/discord",
      name: "discord",
      redirect: (to) => {
        window.location.href = "https://discord.gg/XPyjQXaXKG"
        return { path: to.path };
      },
    },
  ],
});

export default router;
