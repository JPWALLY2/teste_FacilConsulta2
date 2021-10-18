import { createRouter, createWebHistory } from 'vue-router'
import Professional from '../views/Professional.vue'
import Attendance from '../views/Attendance.vue'
import Review from '../views/Review.vue'
import Conclusion from '../views/Conclusion.vue'
import testeValidation from '../views/teste.vue'

const routes = [
  {
    path: '/',
    name: 'Professional',
    component: Professional
  },

  {
    path: '/attendance',
    name: 'Attendance',
    component: Attendance
   
  },

  {
    path: '/review',
    name: 'Review',
    component: Review
   
  },
  {
    path: '/conclusion',
    name: 'Conclusion',
    component: Conclusion
   
  },
  {
    path: '/teste',
    name: 'testeValidation',
    component: testeValidation
   
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
