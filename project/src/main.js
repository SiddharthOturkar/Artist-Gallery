import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/storage';
import VueRouter from 'vue-router'
import store from './store/store'
import ProductsPage from './components/ProductsPage.vue'
import ProductId from './components/ProductId.vue'
import HomePage from './components/HomePage.vue'
import ArtExhibition from './components/ArtExhibition.vue'
import LoginPage from '@/views/LoginPage'
import SignupPage from '@/views/SignupPage'
import BuyPainting from './components/BuyPainting.vue'
import Dashboard from '@/views/Dashboard' 
import ConfirmPurchase from './components/ConfirmPurchase.vue'
import AboutUs from './components/AboutUs.vue'

const routes = [
  {
    path: '/',
    name: 'ArtExhibition',
    component: ArtExhibition,
  },
  {
    path: '/ArtHistory',
    name: 'Art History',
    component: HomePage,
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/SignUp',
    name: 'SignupPage',
    component: SignupPage,
    meta: {
      requiresAuth: false
    }
  }, 
  {
    path: '/BuyPainting',
    name: 'BuyPainting',
    component: BuyPainting,
  },
  {
    path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
  },
  { 
    path: '/Product/:id',
    name:'ProductId',
    component: ProductId,
    props:true
  },
  {
    path: '/ProductsPage',
    name: 'ProductsPage',
    component: ProductsPage,
  },
  {
    path: '/ConfirmPurchase',
    name: 'ConfirmPurchase',
    component:ConfirmPurchase,
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs,
  },
];

// Vue.filter('rent',function(val){
//   return val*200
// })
// Vue.filter('concat', function (input) {
//   // here `input` === `this.userInput`
//   return input*4000
// })
Vue.use(VueRouter)
const router = new VueRouter({  mode:'history', routes, linkExactActiveClass:'active' })
Vue.config.productionTip = false


let app = '';
const config = {
  apiKey: "AIzaSyDs8ityI7p5MscSDADyRZBtvTa2JFTCE7g",
  authDomain: "artgallery-2a2a0.firebaseapp.com",
  databaseURL: "https://artgallery-2a2a0-default-rtdb.firebaseio.com",
  projectId: "artgallery-2a2a0",
  storageBucket: "artgallery-2a2a0.appspot.com",
  messagingSenderId: "58241841727",
  appId: "1:58241841727:web:fcbcb2d15edb7f6899d68a"
};

firebase.initializeApp(config);
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  
  if ('requiresAuth' in to.meta &&  requiresAuth && !currentUser) next('/');
  else if ('requiresAuth' in to.meta && !requiresAuth && currentUser) next('LoginPage');
  else next();
});

// const storage = firebase.storage();
export const bus = new Vue()
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});