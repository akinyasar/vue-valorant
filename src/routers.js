import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Agents from './components/Agents.vue'
import Weapons from './components/Weapons.vue'
import { createRouter,createWebHistory } from 'vue-router'
import store from './store'

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/',
        meta: {
            isAuthenticated: 'true'
        }
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up',
        meta: {
            isAuthenticated: 'false'
        }
    },
    {
        name:'Login',
        component:Login,
        path:'/login',
        meta: {
            isAuthenticated: 'false'
        }
    },
    {
        name:'Agents',
        component:Agents,
        path:'/agents',
        meta: {
            isAuthenticated: 'true'
        }
    },
    {
        name:'Weapons',
        component:Weapons,
        path:'/weapons',
        meta: {
            isAuthenticated: 'true'
        }
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if(localStorage.getItem("user-info") !== null || localStorage.getItem("user-info") !== undefined){
      store.commit('auth/setUser', JSON.parse(localStorage.getItem("user-info")))//her route geçişinde eğer storeda user verisi varsa state'e set ediyoruz
    }
    if(to.matched.some(record => record.meta.isAuthenticated === 'true' && store.getters['auth/getUser'] === null)){
        next({ //user oturum isteyen sayfalara erişim istiyorsa ve oturum açmamışsa logine yönlendirilir
            path: '/login',
        })
    }
    else if (to.matched.some(record => record.meta.isAuthenticated !=="true" &&  store.getters['auth/getUser'] !== null )) {
        next({name:'Home'}); //user oturum açmışsa home sayfasına yönlendirilir
    } 
    else{
        next(); 
    }
})
export default router;