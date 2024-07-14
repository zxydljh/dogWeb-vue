import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import store from "@/store";
import ElementPlus from 'element-plus'
import ArcoVue from '@arco-design/web-vue';

import {client} from "@/utils/alioss"

import router from "@/router/router"
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);

app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(ArcoVue);

// 将OSS客户端实例挂载到Vue应用程序的全局属性上
app.config.globalProperties.$oss = client;
app.config.globalProperties.$axios = axios

app.mount('#app');