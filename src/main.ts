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
  faComments,
  faSignInAlt,
  faHeart,
  faExternalLinkAlt,
  faFlagUsa,
  faMapMarkerAlt,
  faUsers,
  faHome,
  faLock,
  faBolt,
  faGamepad,
  faGlobe,
  faMobileAlt,
  faRobot,
  faScroll,
  faBalanceScale,
  faServer,
  faShieldAlt,
  faPalette,
  faBriefcase,
  faPlus,
  faChevronDown,
  faHashtag,
  faVolumeUp,
  faThumbtack,
  faSearch,
  faPaperclip,
  faSmile
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
  faRocket,
  faComments,
  faSignInAlt,
  faHeart,
  faExternalLinkAlt,
  faFlagUsa,
  faMapMarkerAlt,
  faUsers,
  faHome,
  faLock,
  faBolt,
  faGamepad,
  faGlobe,
  faMobileAlt,
  faRobot,
  faScroll,
  faBalanceScale,
  faServer,
  faShieldAlt,
  faPalette,
  faBriefcase,
  faPlus,
  faChevronDown,
  faHashtag,
  faVolumeUp,
  faThumbtack,
  faSearch,
  faPaperclip,
  faSmile
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
