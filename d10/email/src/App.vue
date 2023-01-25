<template>
  <div class="container">
    <form>
      <label class="black">Full name of the employee</label>
      <input
        type="text"
        v-model="employeeNameIn"
        name="name"
        placeholder="Full name"
      />
      <label class="black">Employee position</label>
      <input
        type="text"
        v-model="posinionIn"
        name="posinion"
        placeholder="Position"
      />
      <label class="black">Employees place of work </label>
      <input
        type="text"
        v-model="placeIn"
        name="place"
        placeholder="Place of work"
      />
      <label class="black">Description of the situation</label>
      <textarea
        name="message"
        v-model="messageIn"
        cols="30"
        rows="5"
        placeholder="Description"
      >
      </textarea>
      <label class="black">Email to which it will be sent</label>
      <input
        type="email"
        v-model="emailIn"
        name="email"
        placeholder="Your Email"
      />
      <div class="black" :class="computedPadding">
        <input type="checkbox" v-model="isAnonim" /> Send anonymously<br />
      </div>
      <div v-show="!isAnonim">
        <label class="black">Yours full name</label>
        <input
          type="text"
          v-model="yoursNameIn"
          name="name"
          placeholder="Full name"
        />
        <label class="black">Yours contact phone</label>
        <input
          type="text"
          v-model="yoursPhoneIn"
          name="phone"
          placeholder="Phone"
        />
      </div>
      <button type="button" v-on:click="sendMail">Надіслати</button>
      <!-- <h1 class="black">{{ answerLog }}</h1> -->
    </form>
  </div>
</template>

<script setup>
import emailjs from "emailjs-com";
import { ref, computed } from "vue";

var employeeNameIn = ref("ПІБ порушника");
var placeIn = ref("інститут");
var posinionIn = ref("вчитель");
var messageIn = ref("Взяв гроші");
var isAnonim = ref(false);
var yoursNameIn = ref("ПІБ заявника");
var yoursPhoneIn = ref("380964522211");
var emailIn = ref("snekeis01@gmail.com");

var computedPadding = computed(() => {
  return isAnonim.value ? "addPading" : "";
});

function sendMail() {
  if (isAnonim) {
    yoursNameIn.value = "анонімно";
    yoursPhoneIn.value = "анонімно";
  }
  console.log("Try!");
  emailjs
    .send(
      "service_fdg8guo",
      "template_via8a7e",
      {
        employee_name: employeeNameIn.value,
        employee_place: placeIn.value,
        employee_posinion: posinionIn.value,
        message: messageIn.value,
        to_email: emailIn.value,

        yours_name: yoursNameIn.value,
        yours_phone: yoursPhoneIn.value,
      },
      "XbM5I-Rr-9oVbljDe"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}

// export default {
//   data() {
//     return {
//       employeeNameIn: "ПІБ порушника",
//       placeIn: "інститут",
//       posinionIn: "вчитель",
//       messageIn: "Взяв гроші",

//       isAnonim: false,
//       yoursNameIn: "ПІБ заявника",
//       yoursPhoneIn: "380964522211",

//       emailIn: "snekeis01@gmail.com",
//     };
//   },
//   computed: {
//     computedPadding() {
//       return this.isAnonim ? "addPading" : "";
//     },
//   },
//   methods: {
//     sendMail() {
//       if (this.isAnonim) {
//         this.yoursNameIn = "анонімно";
//         this.yoursPhoneIn = "анонімно";
//       }
//       console.log("Try!");
//       emailjs
//         .send(
//           "service_fdg8guo",
//           "template_via8a7e",
//           {
//             employee_name: this.employeeNameIn,
//             employee_place: this.placeIn,
//             employee_posinion: this.posinionIn,
//             message: this.messageIn,
//             to_email: this.emailIn,

//             yours_name: this.yoursNameIn,
//             yours_phone: this.yoursPhoneIn,
//           },
//           "XbM5I-Rr-9oVbljDe"
//         )
//         .then(
//           function (response) {
//             console.log("SUCCESS!", response.status, response.text);
//           },
//           function (error) {
//             console.log("FAILED...", error);
//           }
//         );
//     },
//   },
// };
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}
.black {
  color: black;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 6px;
  resize: vertical;
}

.addPading {
  padding-bottom: 10px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
