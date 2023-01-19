import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import MainWindow from "./components/MainWindow.vue";
import CityWeather from "./components/CityWeather.vue";

const routes = [
  { path: "/", component: MainWindow },
  { path: "/city-weather/:Cityname", component: CityWeather, props: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(VueAxios, axios).use(router).mount("#app");
