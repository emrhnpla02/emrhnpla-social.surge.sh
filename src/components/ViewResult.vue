<template>
  <div class="box column is-7 pt-0">
    <VR-Title />
    <VR-Header />
    <VR-Links />
    <VR-Footer />
  </div>
</template>

<script>
import Header from "./ViewResult/Header.vue";
import Title from "./ViewResult/Title.vue";
import Links from "./ViewResult/Links.vue";
import Footer from "./ViewResult/Footer.vue";
export default {
  components: {
    "VR-Header": Header,
    "VR-Title": Title,
    "VR-Links": Links,
    "VR-Footer": Footer,
  },
};
</script>