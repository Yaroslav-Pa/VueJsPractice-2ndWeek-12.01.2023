<template>
  <Modal :open="isOpen" @close="isOpen = !isOpen">
    <img :src="student.photo" width="500" />
  </Modal>
  <div class="niceLetters">
    <img
      :open="isOpen"
      @click="isOpen = !isOpen"
      :src="student.photo"
      width="200"
    />
    <br />
    <!-- <button :open="isOpen" @click="isOpen = !isOpen">Show Modal</button> -->
    <br />

    <h2>{{ student.name }}</h2>
    <h5>Завдання {{ isDonePrOfStudent }}</h5>
  </div>
</template>

<script>
import axios from "axios";
import Modal from "./Modal.vue";
import { ref } from "vue";

export default {
  components: { Modal },
  props: {
    id: "",
  },
  data() {
    return {
      student: {},
    };
  },
  setup() {
    const isOpen = ref(false);

    return { isOpen };
  },
  computed: {
    isDonePrOfStudent() {
      return this.student.isDonePr ? "здано" : "не здано";
    },
  },
  mounted() {
    axios.get("http://34.82.81.113:3000/students/" + this.id).then((res) => {
      this.student = res.data;
    });
  },
};
</script>

<style scoped>
.niceLetters {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
