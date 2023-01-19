<script>
const VITE_API_HOST = import.meta.env.VITE_BACKEND_PORT;
const VITE_API_ID = import.meta.env.VITE_MAP_KEY;

export default {
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

      latCurrent: "",
      lonCurrent: "",
    };
  },
  mounted: function () {
    if (localStorage.getItem("usersCitys") != undefined) {
      this.chosenCitys = JSON.parse(localStorage.getItem("usersCitys"));
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((data) => {
        this.latCurrent = data.coords.latitude;
        this.lonCurrent = data.coords.longitude;
        this.axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${this.latCurrent}&lon=${this.lonCurrent}&appid=7914d5a440960cfd5df3bd0388a7ad0f`
          )
          .then((response) => {
            console.log(response.data);
            this.infoAboutCity = response.data;
            this.Cityname = this.infoAboutCity.name;
            this.getCountry = this.infoAboutCity.sys.country;
            this.getLat = this.infoAboutCity.coord.lat;
            this.getLon = this.infoAboutCity.coord.lon;
            this.getHumidity = this.infoAboutCity.main.humidity;
            this.getTemp = this.infoAboutCity.main.temp;
            this.getMain = this.infoAboutCity.weather[0].main;
            this.getPressure = this.infoAboutCity.main.pressure;
            this.getDescription = this.infoAboutCity.weather[0].description;
          });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  },
  methods: {
    addCity() {
      if (this.inputedCity != "") {
        this.chosenCitys.push(this.inputedCity);
        console.log(this.chosenCitys);
        localStorage.setItem("usersCitys", JSON.stringify(this.chosenCitys));
        this.inputedCity = "";
      } else {
        localStorage.clear();
        this.chosenCitys = [];
      }
    },
  },
};
</script>

<template>
  <!-- https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} -->
  <div>
    <div class="block bgBox">
      <div class="upperBlok">
        <div class="blockU whitetxt">
          <h3>City name</h3>
          <p>Input city</p>
          <input type="text" v-model="inputedCity" />
          <button @click="addCity">Додати</button>
        </div>
        <div class="blockU whitetxt">
          <h3>Yours citys</h3>
          <p>Chose city</p>
          <select v-model="nowChosenCity">
            <option v-for="city in chosenCitys" v-bind:value="city">
              {{ city }}
            </option>
          </select>
          <router-link
            class="myRouterLink"
            v-bind:to="'/city-weather/' + nowChosenCity"
          >
            Погода
          </router-link>
        </div>
      </div>
    </div>
    <div class="block">
      <!-- <h1>For {{ this.Cityname }}</h1> -->
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
  </div>
</template>

<style>
.tableForDisplay {
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
}
.tableForDisplay img {
  width: 20px;
}
.childTable p {
  display: flex;
}
.childTable {
  margin: 30px;
}
.block {
  display: flex;
  justify-content: space-around;
}

.bgBox {
  background: rgb(51, 51, 51, 0.7);
  border-radius: 30px;
  width: 25%;
  margin: 0 auto;
  margin-top: 75px;
}
.upperBlok {
  padding: 20px;
  display: flex;
}

.upperBlok p {
  color: plum;
}

.whitetxt {
  color: white;
}

.blockU {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
}
.blockU input,
select {
  width: 150px;
  padding: 5px;
  border-radius: 20px;
}
.blockU button,
.myRouterLink {
  margin-top: 5px;
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.blockU h3 {
  margin-bottom: 20px;
}

/* .blockU button:focus {
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
    rgba(50, 151, 211, 0.3) 0 0 0 4px;
} */
</style>
