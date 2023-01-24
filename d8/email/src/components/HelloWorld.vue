<template>
  <div class="container">
    <form>
      <label class="black">Name</label>
      <input type="text" v-model="nameIn" name="name" placeholder="Your Name" />
      <label class="black">Email</label>
      <input
        type="email"
        v-model="emailIn"
        name="email"
        placeholder="Your Email"
      />
      <label class="black">Message</label>
      <textarea
        name="message"
        v-model="messageIn"
        cols="30"
        rows="5"
        placeholder="Message"
      >
      </textarea>

      <button v-on:click="sendMail">Надіслати</button>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      nameIn: "Імя",
      emailIn: "snekeis01@gmail.com",
      messageIn: "ДОПОМОЖІІІІІІІІІІІІІІТЬ",
      fromName: "анонім",
    };
  },
  methods: {
    sendMail() {
      //emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
      console.log("Try!");
      emailjs
        .send(
          "service_fdg8guo",
          "template_via8a7e",
          {
            to_name: this.nameIn,
            to_email: this.emailIn,
            message: this.messageIn,

            from_name: this.fromName,
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
    },
  },
};
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
  margin-bottom: 16px;
  resize: vertical;
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
