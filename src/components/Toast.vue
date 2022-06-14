<template>
  <div
    v-show="this.$store.state[type]"
    :id="type"
    class="notification animate__animated animate__bounceInUp"
    :class="'is-' + color"
  >
    <button class="delete" @click="() => hideNotification(type)"></button>
    <p><slot /></p>
  </div>
</template>
<script>
export default {
  props: {
    type: String,
    color: String,
  },
  methods: {
    hideNotification(ref) {
      this.$store.state[ref] = false;
    },
  },
};
</script>
