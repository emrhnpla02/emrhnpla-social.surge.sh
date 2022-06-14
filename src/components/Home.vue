<template>
  <div class="columns is-desktop is-variable is-flex is-justify-content-center">
    <View-Result />
    <Toast type="copySuccess" color="primary"
      >Successfully copied to clipboard!</Toast
    >
    <Toast type="copyError" color="danger">
      Ooops! An error occured while copying to clipboard.
      <br />
      Maybe refreshing the page would solve the problem?
      <br />
      If you know what you do you can check console for more information.
    </Toast>
  </div>
</template>

<script>
import ViewResult from "./ViewResult.vue";
import Toast from "./Toast.vue";
export default {
  components: { ViewResult, Toast },
};
</script>

<style>
.column {
  text-align: center;
}
.notification {
  position: fixed !important;
  bottom: 10px;
}
</style>
