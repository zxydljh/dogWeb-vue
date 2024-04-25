import { createApp } from 'vue'
import App from './App.vue'

import {client} from "@/utils/alioss"

import router from "@/router/router"


const app = createApp(App);

app.use(router)

// 将OSS客户端实例挂载到Vue应用程序的全局属性上
app.config.globalProperties.$oss = client;

app.mount('#app');