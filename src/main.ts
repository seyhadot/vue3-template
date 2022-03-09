import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/tailwind.scss'
import './assets/index.scss'
import './assets/style.scss'
import components from '@/components'
const app = createApp(App)

app.use(components)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
