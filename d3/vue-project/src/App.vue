<script>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import axios from "axios";

export default {
  data() {
    return {
      arrCities: [],
      arrWerhouses: [],
      chosenCity: "",
    };
  },
  mounted() {
    axios
      .post("https://api.novaposhta.ua/v2.0/json/", {
        apiKey: "5aa46b8fde4c88031c81aebf04a0ed7d",
        modelName: "Address",
        calledMethod: "getCities",
        methodProperties: {
          Warehouse: "1",
        },
      })
      .then((response) => {
        response.data.data.forEach((element) => {
          this.arrCities.push(element.Description);
        });
      });
  },
  methods: {
    searchForWarehouses() {
      if (this.chosenCity != "") {
        axios
          .post("https://api.novaposhta.ua/v2.0/json/", {
            apiKey: "5aa46b8fde4c88031c81aebf04a0ed7d",
            modelName: "Address",
            calledMethod: "getWarehouses",
            methodProperties: {
              CityName: this.chosenCity,
            },
          })
          .then((response) => {
            this.arrWerhouses = [];
            response.data.data.forEach((element) => {
              this.arrWerhouses.push(element.Description);
            });
          });
      }
    },
  },
};
</script>

<template>
  <div>
    <h2>Місто</h2>
    <select v-model="chosenCity" @change="searchForWarehouses()">
      <option v-for="(city, id) in arrCities">
        {{ city }}
      </option>
    </select>

    <h2>Відділення</h2>
    <select>
      <option v-for="(city, id) in arrWerhouses">{{ city }}</option>
    </select>
    <!-- <button @click="searchForWarehouses()"></button> -->
  </div>
</template>
