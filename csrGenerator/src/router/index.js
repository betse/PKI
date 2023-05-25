import { createRouter, createWebHistory } from 'vue-router'
import CSR from "../views/generateCSR.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      name: CSR,
      path: '/',
      component: CSR
    },
    {
      name: Login,
      path: '/login',
      component: Login
    },
    {
      name: Register,
      path: '/signup',
      component: Register
    }
  ]
})

export default router
