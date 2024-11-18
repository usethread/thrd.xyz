import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGear,
  faCircleDollarToSlot,
  faSquareArrowUpRight,
  faArrowUpRightFromSquare,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faXTwitter,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faSquareArrowUpRight,
  faArrowUpRightFromSquare,
  faGear,
  faDiscord,
  faCircleDollarToSlot,
  faXTwitter,
  faTwitter,
  faGithub,
  faRocket
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
