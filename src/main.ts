import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入elementplus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";
// import * as tool from '@/utils/tools.js'
import * as moment from 'moment'
const state = createPinia();
const app = createApp(App);
app.use(store);
//使用pinia
app.use(state);
app.use(router);
app.use(ElementPlus);
// app.config.globalProperties.$tool = tool;
app.config.globalProperties.$moment = moment;
app.mount("#app");
