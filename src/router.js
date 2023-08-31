import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path:'/',
            name: 'home',
            component: Home
        },
        {
            path:'/projects',
            name: 'projects',
            component: Projects
        },
        {
            path:'/projects/show/:id',
            name: 'project.show',
            component: SingleProject
        },

    ]
});

export{router};