<template>
  <div class="columns is-desktop is-variable is-flex is-justify-content-center">
    <View-Result />
    <div
      v-if="this.$store.state.copySuccess"
      class="
        notification
        successNotf
        is-primary
        animate__animated animate__jackInTheBox
      "
    >
      <button class="delete" @click="deleteNotification"></button>
      <p>Successfully copied to clipboard!</p>
    </div>
    <div
      v-if="this.$store.state.copyError"
      class="notification is-danger animate__animated animate__jackInTheBox"
    >
      <button class="delete" @click="deleteNotification"></button>
      <p>
        Ooops! There is a problem with copying the url.
        <br />
        Maybe refreshing the page would solve the problem?
        <br />
        If you know what you do you can check console for more information.
      </p>
    </div>
  </div>
</template>

<script>
import ViewResult from "./ViewResult.vue";
export default {
  components: { ViewResult },
  methods: {
    deleteNotification(e) {
      e.target.parentElement.remove();
    },
  },
};
</script>

<style>
.column {
  text-align: center;
}
.notification {
  position: fixed !important;
  bottom: 0;
}
</style>