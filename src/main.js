import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugins/font-awesome';
import router from "./routers"
import store from "./store"


createApp(App).use(router).use(store).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
