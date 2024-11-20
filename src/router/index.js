import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginPage from '@/views/loginPage.vue'
import contentManage from "../views/contentManage.vue"
import addNewItem from "../views/addNewItem.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
    {
      path: '/contentManage',
      name: 'contentManage',
      component: contentManage
    },
    {
      path: '/addNewItem',
      name: 'addNewItem',
      component: addNewItem
    }
  ],
})

export default router
