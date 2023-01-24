import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";

import store from "./components/store.js";
import App from "./components/App.vue";
import Students from "./components/Students.vue";
import StudentInfo from "./components/StudentInfo.vue";
import Login from "./components/Login.vue";
// we CAN`T do like = import {App, Students, StudentInfo} from "./components";

const routes = [
  { path: "/", component: Students, meta: { requiresAuth: true } },
  {
    path: "/student-info/:id",
    component: StudentInfo,
    props: true,
    meta: { requiresAuth: true },
  },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.getUser === null) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

createApp(App).use(VueAxios, axios).use(router).use(store).mount("#app");
