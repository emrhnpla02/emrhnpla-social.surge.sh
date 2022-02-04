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
      <p class="about mb-5">
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
      <div class="is-flex is-flex-direction-column is-align-items-center mt-2">
        <div>
          <span class="tag is-large is-rounded"
            ><img src="../../assets/icons/elementio.svg" width="25" />
          </span>
          <span class="tag is-large is-rounded"
            ><img src="../../assets/icons/protonmail.svg" width="25" />
          </span>
          <span class="tag is-large is-rounded">
            <img src="../../assets/icons/lemmy.webp" width="25" />
          </span>
        </div>
        <div>
          <span class="tag is-large is-rounded" style="color: #3088d4"
            ><i class="fab fa-lg fa-mastodon"></i
          ></span>
          <span class="tag is-large is-rounded" style="color: #303443"
            ><i class="fab fa-lg fa-github"></i
          ></span>
          <span class="tag is-large is-rounded" style="color: #fe4400">
            <i class="fab fa-lg fa-reddit"></i
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.state.user,
      isMobile: false,
    };
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