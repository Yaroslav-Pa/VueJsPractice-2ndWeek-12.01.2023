import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import MainWindow from "./components/MainWindow.vue";

const routes = [
  { path: "/", component: MainWindow },
  //{ path: "/student-info/:id", component: StudentInfo, props: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(VueAxios, axios).use(router).mount("#app");
