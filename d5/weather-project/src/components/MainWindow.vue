<script>
export default {
  data() {
    return {
      Cityname: "London",

      chosenCitys: [],
      infoAboutCity: [],
      inputedCity: "",
    };
  },
  mounted: function () {
    this.axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.Cityname}&appid=7914d5a440960cfd5df3bd0388a7ad0f`
      )
      .then((response) => {
        console.log(response.data);
        this.infoAboutCity = response.data;
        console.log(this.infoAboutCity.main.pressure);
      });
  },
  methods: {},
};
</script>

<template>
  <!-- https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} -->
  <div>
    <input type="text" name="" id="" v-model="inputedCity" />
    <button type="submit">submit</button>
    <select name="" id="">
      <option v-for="city in chosenCitys">{{ city }}</option>
    </select>

    <div class="block">
      <!-- <h1>For {{ this.Cityname }}</h1> -->
      <div class="tableForDisplay">
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
          <p>{{ this.infoAboutCity.sys.country }}</p>
          <p>humidity</p>
          <p>temp</p>
          <p>main</p>
          <p>pressure</p>
          <p>description</p>
        </div>
        <div class="childTable">
          <p>
            [{{ this.infoAboutCity.coord.lat }};
            {{ this.infoAboutCity.coord.lon }}]
          </p>
          <p>{{ this.infoAboutCity.main.humidity }}</p>
          <p>{{ this.infoAboutCity.main.temp }}</p>
          <p>{{ this.infoAboutCity.weather[0].main }}</p>
          <p>{{ this.infoAboutCity.main.pressure }}</p>
          <p>{{ this.infoAboutCity.weather[0].description }}</p>
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
  width: 25%;
  background: rgb(51, 51, 51, 0.7);
  border-radius: 30px;
}
.tableForDisplay img {
  width: 20px;
}
.childTable p {
  display: flex;

  /* justify-content: center; */
  /* padding: 50px; */
}
.childTable {
  margin: 30px;
}
.block {
  display: flex;
  justify-content: space-around;
}
</style>
