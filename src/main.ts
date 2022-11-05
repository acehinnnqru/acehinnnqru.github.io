import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:windi.css'

import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')
