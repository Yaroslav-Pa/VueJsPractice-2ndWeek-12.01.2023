<template>
  <Modal :open="isOpen" @close="isOpen = !isOpen">
    <img :src="student.photo" width="100" />
  </Modal>
  <img :src="student.photo" width="100" />
  <button :open="isOpen" @click="isOpen = !isOpen">Show Modal</button>
  <br />
  {{ student.name }}<br />
  Завдання {{ isDonePrOfStudent }}
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
.activeDark {
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
