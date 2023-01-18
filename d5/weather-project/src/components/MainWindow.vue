<script>
export default {
  data() {
    return {
      Cityname: "Zaporizhia",

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
        localStorage.setItem("infoAboutCityArr", this.infoAboutCity);
        console.log(this.infoAboutCity.main.pressure);
      });
    this.infoAboutCity = localStorage.getItem("infoAboutCityArr");
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

    <p>For {{ this.Cityname }}</p>
    <div class="">
      <table class="tableForDisplay">
        <tr>
          <th>{{ this.Cityname }}</th>
          <th><img src="https://img.icons8.com/office/16/null/blur.png" /></th>
          <th>
            <img
              src="https://img.icons8.com/external-kosonicon-flat-kosonicon/64/null/external-temperatures-temperature-kosonicon-flat-kosonicon.png"
            />
          </th>
          <th>
            <img
              src="https://img.icons8.com/external-flat-amoghdesign/32/null/external-cloud-weather-vol-01-flat-amoghdesign-18.png"
            />
          </th>
          <th>
            <img src="https://img.icons8.com/officel/16/null/pressure.png" />
          </th>
          <th>
            <img
              src="https://img.icons8.com/external-microdots-premium-microdot-graphic/64/null/external-weather-weather-forecast-microdots-premium-microdot-graphic-4.png"
            />
          </th>
        </tr>
        <tr>
          <td>{{ this.infoAboutCity.sys.country }}</td>
          <td>humidity</td>
          <td>temp</td>
          <td>main</td>
          <td>pressure</td>
          <td>description</td>
        </tr>
        <tr>
          <td>
            {{ this.infoAboutCity.coord.lat }};
            {{ this.infoAboutCity.coord.lon }}
          </td>
          <td>{{ this.infoAboutCity.main.humidity }}</td>
          <td>{{ this.infoAboutCity.main.temp }}</td>
          <td>{{ this.infoAboutCity.weather[0].main }}</td>
          <td>{{ this.infoAboutCity.main.pressure }}</td>
          <td>{{ this.infoAboutCity.weather[0].description }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style>
.tableForDisplay {
}
</style>
