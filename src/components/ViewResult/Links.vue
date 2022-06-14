<template>
  <div
    class="columns is-flex is-justify-content-space-evenly is-flex-wrap-wrap"
  >
    <div
      v-for="link in this.$store.state.links"
      :key="link.websiteName"
      class="card mb-3 column is-5-fullhd is-12 is-12-mobile"
    >
      <div class="card-header is-relative">
        <div class="card-header-title is-flex is-justify-content-center">
          <a
            class="is-flex is-align-items-center has-text-dark"
            :href="link.websiteHref"
            target="_blank"
          >
            <Icon :icon="link.websiteIcon" width="35" class="mr-4" />
            <span class="title">{{ link.websiteName }}</span>
          </a>
        </div>
      </div>
      <div class="card-content is-flex is-flex-direction-column">
        <div class="mb-3">
          <span class="mr-2">{{ link.username }}</span>
          <Icon
            icon="ci:copy"
            width="20"
            class="is-clickable mr-2"
            style="color: #00d1b2"
            @click="() => copyToClipboard(link.websiteName)"
          />
        </div>
        <div>
          <a
            :href="link.userHref"
            :ref="link.websiteName"
            target="_blank"
            class="button is-medium is-fullwidth is-primary"
          >
            <Icon icon="akar-icons:link-out" width="20" class="mr-2" />
            <span>visit link</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  methods: {
    copyToClipboard(ref) {
      const handleNotf = (id) => {
        this.$store.state[id] = true;
        setTimeout(() => {
          const toast = document.querySelector(`#${id}`);
          toast.classList.remove("animate__bounceInUp");
          toast.classList.add("animate__fadeOutDown");
          setTimeout(() => {
            this.$store.state[id] = false;
          }, 2000);
        }, 3000);
      };

      navigator.clipboard
        .writeText(this.$refs[ref][0].href)
        .then(() => handleNotf("copySuccess"))
        .catch(() => handleNotf("copyError"));
    },
  },
};
</script>
