<script>
import { Warning } from "postcss";

const VITE_API_HOST = import.meta.env.VITE_BACKEND_PORT;
const VITE_API_ID = import.meta.env.VITE_MAP_KEY;

export default {
  props: ["Cityname"],
  data() {
    return {
      infoAboutCity: [],

      chosenCitys: [],
      nowChosenCity: "",
      inputedCity: "",

      getCountry: "",
      getLat: "",
      getLon: "",
      getHumidity: "",
      getTemp: "",
      getMain: "",
      getPressure: "",
      getDescription: "",

      warningMes: "",
    };
  },
  mounted: function () {
    if (this.Cityname != "") {
      this.axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.Cityname}&appid=7914d5a440960cfd5df3bd0388a7ad0f`
        )
        .then((response) => {
          // console.log(response.data);
          this.infoAboutCity = response.data;
          this.getCountry = this.infoAboutCity.sys.country;
          this.getLat = this.infoAboutCity.coord.lat;
          this.getLon = this.infoAboutCity.coord.lon;
          this.getHumidity = this.infoAboutCity.main.humidity;
          this.getTemp = this.infoAboutCity.main.temp;
          this.getMain = this.infoAboutCity.weather[0].main;
          this.getPressure = this.infoAboutCity.main.pressure;
          this.getDescription = this.infoAboutCity.weather[0].description;
        });
    } else {
      this.warningMes = "No city was chosen";
    }
    console.log("object :>> ", this.Cityname);
  },
};
</script>

<template>
  <!-- https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} -->
  <div class="block">
    <h1>{{ this.warningMes }}</h1>
    <div class="tableForDisplay bgBox">
      <div class="childTable">
        <p>{{ this.Cityname }}</p>
        <p><img src="https://img.icons8.com/office/16/null/blur.png" /></p>
        <p>
          <img
            src="https://img.icons8.com/external-kosonicon-flat-kosonicon/64/null/external-temperatures-temperature-kosonicon-flat-kosonicon.png"
          />
        </p>
        <p>
          <img
            src="https://img.icons8.com/external-flat-amoghdesign/32/null/external-cloud-weather-vol-01-flat-amoghdesign-18.png"
          />
        </p>
        <p>
          <img src="https://img.icons8.com/officel/16/null/pressure.png" />
        </p>
        <p>
          <img
            src="https://img.icons8.com/external-microdots-premium-microdot-graphic/64/null/external-weather-weather-forecast-microdots-premium-microdot-graphic-4.png"
          />
        </p>
      </div>
      <div class="childTable">
        <p>{{ this.getCountry }}</p>
        <p>humidity</p>
        <p>temp</p>
        <p>main</p>
        <p>pressure</p>
        <p>description</p>
      </div>
      <div class="childTable">
        <p>[{{ this.getLat }}; {{ this.getLon }}]</p>
        <p>{{ this.getHumidity }}</p>
        <p>{{ this.getTemp }}</p>
        <p>{{ this.getMain }}</p>
        <p>{{ this.getPressure }}</p>
        <p>{{ this.getDescription }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>
