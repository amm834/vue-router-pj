import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import Products from '@/views/Product';
import Profile from '@/views/Profile';
import Login from '@/views/Login';
import ProductDetail from '@/views/ProductDetail';

Vue.use(VueRouter);

const routes = [{
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
    component: Profile,
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/product/:id',
    component: ProductDetail
  }];

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if (to.path === '/profile' || to.path === '/products') {
    let auth = localStorage.getItem('auth');
    if (auth)
      next();
    else
      next('/login')
  } else {
    next()
  }
})

export default router;