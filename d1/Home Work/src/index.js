import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

createApp({
  data() {
    return {
      course: [],
      convertFrom: "",
      convertTo: "",
      Answer: 0,
      inputedAmount: 0,
      USDs: 0,
      EURs: 0,
      EURbuy: 0,
      USDbuy: 0,
      eurUSD: 0,
      usdEUR: 0,
      Answer2: "",
      //student: { pib: "", zdav: false, group: "" },
    };
  },
  mounted: function () {
    axios.get("https://api.monobank.ua/bank/currency").then((response) => {
      console.log(response.data);
      this.course = response.data;
    });
  },
  methods: {
    courseCounter() {
      this.Answer2 = "";
      this.USDs = this.course[0].rateSell;
      this.EURs = this.course[1].rateSell;
      this.eurUSD = this.course[2].rateSell;
      this.usdEUR = this.USDs / this.EURs;
      this.USDbuy = this.course[0].rateBuy;
      this.EURbuy = this.course[1].rateBuy;
      if (this.convertFrom == "US Dollar") {
        if (this.convertTo == "US Dollar") {
          this.Answer = this.inputedAmount * 1;
        } else if (this.convertTo == "Euro") {
          this.Answer = this.inputedAmount * this.usdEUR;
        } else if (this.convertTo == "UAH") {
          this.Answer = this.inputedAmount * this.USDbuy;
        }
      } else if (this.convertFrom == "Euro") {
        if (this.convertTo == "US Dollar") {
          this.Answer = this.inputedAmount * this.eurUSD;
        } else if (this.convertTo == "Euro") {
          this.Answer = this.inputedAmount * 1;
        } else if (this.convertTo == "UAH") {
          this.Answer = this.inputedAmount * this.EURbuy;
        }
      } else if (this.convertFrom == "UAH") {
        if (this.convertTo == "US Dollar") {
          this.Answer = this.inputedAmount / this.USDs;
        } else if (this.convertTo == "Euro") {
          this.Answer = this.inputedAmount / this.EURs;
        } else if (this.convertTo == "UAH") {
          this.Answer = this.inputedAmount / 1;
        }
      } else {
        this.Answer2 = "Error";
      }
    },
  },
}).mount("#app");
