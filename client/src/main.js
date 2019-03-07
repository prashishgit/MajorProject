import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//  reset CSS
import "normalize.css/normalize.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/iconfont/iconfont.css"
import '@/styles/index.scss' // global css
import Chat from 'vue-beautiful-chat'
Vue.use(Chat)
import '@/permission' // permission control
import VueGoogleCharts from 'vue-google-charts'
import axios from 'axios'
Vue.prototype.$http = axios;
Vue.use(axios);
Vue.use(VueGoogleCharts)
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
