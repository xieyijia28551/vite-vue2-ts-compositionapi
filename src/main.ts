import Vue from "vue";
import VueCompositionAPI, { createApp} from "@vue/composition-api";
Vue.use(VueCompositionAPI);

import App from "./App";
createApp({
  render: h => h(App),
}).mount('#app')

// app.use()
// new Vue({
//   el: "#app",
//   router,
//   pinia:store,
//   render: h => h(App),
// });


