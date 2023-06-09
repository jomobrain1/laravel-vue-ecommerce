import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";
import Products from "../views/Products.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import AppLayout from "../components/AppLayout.vue";
import store from "../store";
const routes = [
  {
    path: "/app",
    name: "app",
    component: AppLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "dashboard",
        name: "app.dashboard",
        component: Dashboard,
      },
      {
        path: "products",
        name: "app.products",
        component: Products,
      },
    ],
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresGuest: true },
  },
  {
    path: "/request-password",
    name: "RequestPassword",
    component: RequestPassword,
    meta: { requiresGuest: true },
  },
  {
    path: "/reset-password/:token",
    name: "ResetPassword",
    component: ResetPassword,
    meta: { requiresGuest: true },
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({
      name: "Login",
    });
  } else if (to.meta.requiresGuest && store.state.user.token) {
    next({
      name: "app.dashboard",
    });
  } else {
    next();
  }
});

export default router;
