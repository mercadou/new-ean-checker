import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import vuetify from "./plugins/vuetify";
import googleApi from "./plugins/google-api";

Vue.config.productionTip = false;
Vue.use(googleApi, {
  CLIENT_ID:
    "953427025319-65ba0f3an0i7nce8tptriht22k9ugcql.apps.googleusercontent.com",
  API_KEY: "AIzaSyC07AQAyDQSEvUjflj_5MncBdQ0WBLoDi4",
  DISCOVERY_DOCS: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  SCOPES: "https://www.googleapis.com/auth/drive"
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
