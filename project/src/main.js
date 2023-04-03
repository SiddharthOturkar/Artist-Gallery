import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/storage';

// import firebase from "firebase";
// import router from './router'
import VueRouter from 'vue-router'
// import miniCArt from './components/miniCArt.vue';
import store from './store/store'
import ProductsPage from './components/ProductsPage.vue'
import ProductId from './components/ProductId.vue'
import HomePage1 from '@/components/HomePage1'
// import Cart from './components/Cart.vue'
// import HomeLogin from './views/HomeLogin.vue'
// import axios  from 'axios'
import HomePage from './components/HomePage.vue'
import CityscapePaint from './components/CityscapePaint.vue'
import WarliPainting from './components/WarliPainting.vue'
import ArtExhibition from './components/ArtExhibition.vue'
import BirdsPainting from './components/BirdsPainting.vue'
import AbstractPainting from './components/AbstractPainting.vue' 
import FigurativePainting from './components/FigurativePainting.vue'
import MonochromePainting from './components/MonochromePainting.vue'
import LoginPage from '@/views/LoginPage'
import SignupPage from '@/views/SignupPage'
import BuyPainting from './components/BuyPainting.vue'
import TrialPage from './components/TrialPage'
import Dashboard from '@/views/Dashboard' 
import InstituteImages from './components/InstituteImages.vue'
import CartPage from './components/CartPage.vue'
import ConfirmPurchase from './components/ConfirmPurchase.vue'
import AboutUs from './components/AboutUs.vue'
import BeAMember from './components/BeAMember.vue'

const routes = [
  // {
  //     path: '/',
  //     name: 'HomePage',
  //     component: HomePage,
  // },
  {
    path: '/',
    name: 'ArtExhibition',
    component: ArtExhibition,
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage,
},
  {
    path: '/CityscapePaint',
    name: 'CityscapePaint',
    component: CityscapePaint,
  },
  {
    path: '/WarliPainting',
    name: 'WarliPainting',
    component: WarliPainting,
  },
  {
    path: '/ArtHistory',
    name: 'Art History',
    component: HomePage,
  },
  {
    path: '/BirdsPainting',
    name: 'BirdsPainting',
    component: BirdsPainting,
  },
  {
    path: '/AbstractPainting',
    name: 'AbstractPainting',
    component: AbstractPainting,
  },
  {
    path: '/FigurativePainting',
    name: 'FigurativePainting',
    component: FigurativePainting,
  },
  {
    path: '/MonochromePainting',
    name: 'MonochromePainting',
    component: MonochromePainting,
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
    path: '/TrialPage',
    name: 'TrialPage',
    component: TrialPage,
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
    path: '/InstituteImages',
    name: 'InstituteImages',
    component: InstituteImages,
  },
  { 
    path: '/Product/:id',
    name:'ProductId',
    component: ProductId,
    props:true
  },
  { 
    path: '/CartPage', 
    name:'CartPage',
    component: CartPage, 
  },
  // {
  //   path: '/MiniCart',
  //   name: 'miniCArt',
  //   component: miniCArt,
  // },
  {
    path: '/HomePage1',
    name: 'HomePage1',
    component: HomePage1,
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
  {
    path: '/BeAMember',
    name: 'BeAMember',
    component:BeAMember,
  },
 
 
];

Vue.filter('rent',function(val){
  return val*200
})
Vue.filter('concat', function (input) {
  // here `input` === `this.userInput`
  return input*4000
})
Vue.use(VueRouter)
const router = new VueRouter({  mode:'history', routes, linkExactActiveClass:'active' })
Vue.config.productionTip = false


// new Vue({
//   mode:'history',
//   router:router,
//   render: h => h(App),
// }).$mount('#app')
// export default router

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
  
  
  if ('requiresAuth' in to.meta &&  requiresAuth && !currentUser) next('HomePage');
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