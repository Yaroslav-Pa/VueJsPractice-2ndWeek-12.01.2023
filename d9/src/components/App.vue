<template>
  <div :class="main">
    <h1 class="niceLetters">Students</h1>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.niceLetters {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.dark {
  height: 100vh;
  background-color: #333;
  color: white;
}

.light {
  background-color: white;
}
</style>

<script>
export default {
  computed: {
    main() {
      return this.$store.getters.getMode ? "dark" : "light";
    },
  },
};
</script>
