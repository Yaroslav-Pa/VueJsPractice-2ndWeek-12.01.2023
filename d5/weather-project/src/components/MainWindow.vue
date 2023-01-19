<script>
export default {
  data() {
    return {
      Cityname: "London",
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
    };
  },
  mounted: function () {
    if (localStorage.getItem("usersCitys") != undefined) {
      this.chosenCitys = JSON.parse(localStorage.getItem("usersCitys"));
    }
    this.axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.Cityname}&appid=7914d5a440960cfd5df3bd0388a7ad0f`
      )
      .then((response) => {
        console.log(response.data);
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
  },
  methods: {
    addCity() {
      if (this.inputedCity != "") {
        this.chosenCitys.push(this.inputedCity);
        console.log(this.chosenCitys);
        localStorage.setItem("usersCitys", JSON.stringify(this.chosenCitys));
        this.addCity = "";
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
        <div class="block whitetxt">
          <h3>City name</h3>
          <h3>Yours citys</h3>
        </div>
        <div class="block">
          <input type="text" v-model="inputedCity" />
          <select v-model="nowChosenCity">
            <option v-for="city in chosenCitys" v-bind:value="city">
              {{ city }}
            </option></select
          ><br />
        </div>
        <!-- <button @click="chosenCityWhather(this.nowChosenCity)"> -->
        <div class="block">
          <button @click="addCity">Додати</button>
          <router-link v-bind:to="'/city-weather/' + nowChosenCity">
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
  padding: 10px;
}

.upperBlok p {
  color: black;
}

.upperBlok input,
select {
  width: 50%;
  margin: 0 15px;
  border-radius: 10px;
  padding: 5px;
}

.whitetxt {
  color: white;
}
</style>
