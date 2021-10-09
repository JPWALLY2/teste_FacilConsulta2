import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueMask from 'vue-jquery-mask'

createApp(App).use(store).use(router).mount('#app')
