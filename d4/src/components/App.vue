<template>
  <div class="main">
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
</style>
