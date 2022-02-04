<template>
  <div
    class="columns is-flex is-justify-content-space-evenly is-flex-wrap-wrap"
  >
    <div
      v-for="link in this.$store.state.links"
      :key="link.websiteName"
      class="card mb-3 column is-5-fullhd is-12 is-12-mobile"
    >
      <div class="card-header">
        <div class="card-header-title is-flex is-justify-content-center">
          <a
            class="is-flex is-align-items-center"
            :href="link.websiteHref"
            target="_blank"
          >
            <i
              class="fa-2x mr-2"
              :class="link.websiteIcon"
              :style="{ color: link.websiteIconColor }"
            ></i>
            <span class="title">{{ link.websiteName }}</span>
          </a>
        </div>
      </div>
      <div class="card-content is-flex is-flex-direction-column">
        <div class="mb-3">
          <span class="mr-2">{{ link.username }}</span
          ><i
            class="far fa-copy is-clickable"
            style="color: #00d1b2"
            @click="copyToClipboard"
          ></i>
        </div>
        <div>
          <a
            :href="link.userHref"
            target="_blank"
            class="button is-medium is-fullwidth is-primary"
          >
            <i class="fas fa-lg fa-external-link-alt mr-2"></i>
            <span>goto!</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    copyToClipboard(e) {
      navigator.clipboard
        .writeText(e.target.parentElement.nextElementSibling.children[0].href)
        .then(() => {
          this.$store.state.copySuccess = true;
          setTimeout(() => {
            document.querySelector(".successNotf").classList =
              "notification succesNotf is-primary animate__animated animate__fadeOutDown";
            setTimeout(() => {
              this.$store.state.copySuccess = false;
            }, 2000);
          }, 3000);
        })
        .catch((err) => {
          console.error(err);
          this.$store.state.copyError = true;
          setTimeout(() => {
            this.$store.state.copyError = false;
          }, 3000);
        });
    },
  },
};
</script>