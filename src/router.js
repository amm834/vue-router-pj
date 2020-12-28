import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import Products from '@/views/Product';
import Profile from '@/views/Profile';
import Login from '@/views/Login';

Vue.use(VueRouter);

const routes = [
  {
  path: '/',
  component: Home
},
  {
  path: '/about',
  component: About
},
  {
  path: '/products',
  component: Products
},
  {
  path: '/profile',
  component: Profile
},
  {
  path: '/login',
  component: Login
},
];

const router = new VueRouter({
  routes,
  mode:'history'
});


export default router;