import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Vue from 'vue';
import Router from 'vue-router';
import AnimationTrial from '@/views/AnimationTrial'
import HomePage from '@/views/HomePage';
import LoginPage from '@/views/LoginPage';
import SignupPage from '@/views/SignupPage';
import UploadImage from '@/views/UploadImage'

Vue.use(Router);

// const router = new Router({
//   routes: [
//     {
//       path: '*',
//       redirect: '/login'
//     },
//     // {
//     //   path: '/',
//     //   redirect: '/login'
//     // },
//     {
//       path: '/login',
//       name: 'LoginPage',
//       component: LoginPage
//     },
//     {
//       path: '/Signup',
//       name: 'SignupPage',
//       component: SignupPage
//     },
//     {
//       path: '/home',
//       name: 'HomePage',
//       component: HomePage,
//       meta: {
//         requiresAuth: true
//       }
//     },
//     {
//       path: '/AnimationTrial',
//       name: 'AnimationTrial',
//       component: AnimationTrial
//     },
//     {
//       path: '/UploadImage',
//       name: 'UploadImage',
//       component: UploadImage
//     }
//   ]
// });

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});
export default router;
