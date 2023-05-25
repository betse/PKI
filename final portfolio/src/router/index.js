import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue"
import Service from "../components/Service.vue"
import Projects from "../components/Project.vue"
import Skills from "../components/Skills.vue"
import Contact from "../components/Contact.vue"

const history = createWebHistory(import.meta.env.BASE_URL)
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/service',
        name: 'Service',
        component: Service
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }]
    const router = createRouter({
        routes, history
    })

    export default router