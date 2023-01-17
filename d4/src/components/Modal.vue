<template>
  <div class="vue-modal" v-show="open">
    <transition name="slide">
      <div class="vue-modal-inner">
        <div class="vue-modal-content">
          <slot />
          <button type="button" @click="$emit('close')">Close</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
