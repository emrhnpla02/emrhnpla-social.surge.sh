<template>
  <div
    class="columns is-desktop is-gapless pb-2"
    style="border-bottom: 1px solid #00d1b2"
  >
    <div v-if="isMobile" class="column is-flex is-justify-content-center">
      <figure class="image is-128x128">
        <img id="pp" class="is-rounded" src="../../assets/pp.jpg" />
      </figure>
    </div>
    <div
      class="column is-flex is-flex-direction-column is-justify-content-start"
      :style="disableHeaderRightBorderOnMobile"
    >
      <p class="name">{{ user.name }}</p>
      <p class="username">{{ user.email }}</p>
      <p class="about mb-5 px-2">
        {{ user.about }}
      </p>
    </div>
    <div v-if="!isMobile" class="column is-flex is-justify-content-center">
      <figure class="image is-128x128">
        <img id="pp" class="is-rounded" src="../../assets/pp.jpg" />
      </figure>
    </div>
    <div class="column" :style="disableHeaderLeftBorderOnMobile">
      <p
        class="is-size-5 pb-2 mx-2"
        style="border-bottom: 1px solid #00d1b2; font-weight: bold"
      >
        Most Used Platforms
      </p>
      <div class="is-flex is-justify-content-center is-align-items-center mt-6">
        <Icon icon="logos:github-icon" width="35" />
        <Icon icon="cib:matrix" class="mx-6" width="35" />
        <Icon icon="logos:spotify-icon" width="35" />
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  data() {
    return {
      user: this.$store.state.user,
      isMobile: false,
    };
  },
  components: {
    Icon,
  },
  computed: {
    disableHeaderLeftBorderOnMobile() {
      return {
        borderLeft: window.screen.width <= 1023 ? "none" : "1px solid #00d1b2",
      };
    },
    disableHeaderRightBorderOnMobile() {
      return {
        borderRight: window.screen.width <= 1023 ? "none" : "1px solid #00d1b2",
      };
    },
  },
  mounted() {
    if (window.screen.width <= 1023) this.isMobile = true;
  },
};
</script>

<style scoped>
img#pp {
  border: 2px solid #018874;
}
div.column p.name {
  font-size: 36px;
}
div.column p.username {
  color: gray;
  font-size: 12px;
}
div.column p.about {
  padding-top: 15px;
}
span.tag.is-large {
  background-color: white;
}
</style>
