import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import store from "@/store";
import ElementPlus from 'element-plus'

import {client} from "@/utils/alioss"

import router from "@/router/router"


const app = createApp(App);

app.use(ElementPlus)
app.use(router)
app.use(store)

// 将OSS客户端实例挂载到Vue应用程序的全局属性上
app.config.globalProperties.$oss = client;
app.config.globalProperties.$axios = axios

app.mount('#app');