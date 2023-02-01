import { createRouter, createWebHistory } from "vue-router";
import CurrencyList from "../views/CurrencyList.vue";
import Converter from "../views/Converter.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "list",
      component: CurrencyList,
    },
    {
      path: "/converter",
      name: "converter",
      component: Converter,
    },
  ],
});

export default router;
