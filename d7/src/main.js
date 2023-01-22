import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";

import store from "./components/store.js";
import App from "./components/App.vue";
import Students from "./components/Students.vue";
import StudentInfo from "./components/StudentInfo.vue";
// we CAN`T do like = import {App, Students, StudentInfo} from "./components";

const routes = [
  { path: "/", component: Students },
  { path: "/student-info/:id", component: StudentInfo, props: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(VueAxios, axios).use(router).use(store).mount("#app");
