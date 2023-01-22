<template>
  <div v-for="(product, index) in products" v-bind:key="index">
    {{ product.item }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.products = this.$store.getters.getCart;
  },
};
</script>

<style></style>
