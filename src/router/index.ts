import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TermsView from "../views/TermsView.vue";
import PrivacyView from "../views/PrivacyView.vue";
import AupView from "../views/AupView.vue";

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
    {
      path: "/terms",
      name: "terms",
      component: TermsView,
    },
    {
      path: "/privacy",
      name: "privacy",
      component: PrivacyView,
    },
    {
      path: "/aup",
      name: "aup",
      component: AupView,
    },
  ],
});

export default router;
