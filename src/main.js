import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.css";
import "bulma/css/bulma.min.css";
import "animate.css";

createApp(App).use(store).mount("#app");
