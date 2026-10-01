import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/landingpages.vue'
import ProductPage from '../pages/productpages.vue'
import AboutPage from '../pages/aboutpage.vue'
import ContactPage from '../pages/contakpages.vue'
const router = createRouter({
 history: createWebHistory(),
 routes: [
 { path: '/', component: LandingPage },
 { path: '/product', component: ProductPage },
 { path: '/about', component: AboutPage },
 { path: '/contact', component: ContactPage },
 ],
})
export default router