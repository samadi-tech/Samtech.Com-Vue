import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./stores/store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./assets/main.css";

library.add(faFacebook, faInstagram, faYoutube, faLinkedin);
const app = createApp(App);

app.use(router);

app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
