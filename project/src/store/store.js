// import axios from 'axios'
// import vue from 'vue'
// import vuex from 'vuex'
// // import products from './modules/products'

// vue.use(vuex)

// export const store = new vuex.Store(
//     {
//         state:{
//             // products:[]


//             products:[
//                 {
//                     id:1,
//                     name:'sidd',
//                     price:1500
//                 },
//                 {
//                     id:2,
//                     name:'om',
//                     price:2600
//                 },
//             ]
//         },
//         getters:{
//             // allProducts: state=>{
//             //     state.products
//             // }

//             saleproducts: state=>{

//               var saleproducts =state.products.map(product=>{
//                 return  {
//                   id:product.id,
//                   name:product.name,
//                   price:product.price
//                 }
//               })
//               return saleproducts
//             }

//         },
//        actions:
//        {
//             // async getProducts({commit})
//             // {
//             //     const response = await axios.get(`https://artgallery-2a2a0-default-rtdb.firebaseio.com/InstituteImages.json`);
//             //     commit("setProducts",response.data); //store the database values in setProducts 
//             // }
//        },
//         mutations:{
//             // setProducts:(state,products)=>(state.products=products)
//             reducePrice:state=>{
//                 state.products.forEach(product=>{
//                     product.price-=1
//                 })
//             }
//         }
//     }
// )


// import Vue from 'vue'
// import Vuex from 'vuex'
// import * as types from './mutation-types'

// Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

// // initial state
// const state = {
//     added: [],
//     all: [
//         {
//             id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c',
//             name: 'COBOL 101 vintage',
//             description: 'Learn COBOL with this vintage programming book',
//             price: 399
//         },
//         {
//             id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f',
//             name: 'Sharp C2719 curved TV',
//             description: 'Watch TV like never before with the brand new curved screen technology',
//             price: 1995
//         },
//         {
//             id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e',
//             name: 'Remmington X mechanical keyboard',
//             description: 'Excellent for gaming and typing, this Remmington X keyboard ' +
//                 'features tactile, clicky switches for speed and accuracy',
//             price: 595
//         }
//     ]
// }

// // getters
// const getters = {
//     allProducts: state => state.all, // would need action/mutation if data fetched async
//     getNumberOfProducts: state => (state.all) ? state.all.length : 0,
//     cartProducts: state => {
//         return state.added.map(({ id, quantity }) => {
//             const product = state.all.find(p => p.id === id)

//             return {
//                 name: product.name,
//                 price: product.price,
//                 quantity
//             }
//         })
//     }
// }

// // actions
// const actions = {
//     addToCart({ commit }, product) {
//         commit(types.ADD_TO_CART, {
//             id: product.id
//         })
//     }
// }

// // mutations
// const mutations = {

//     [types.ADD_TO_CART](state, { id }) {
//         const record = state.added.find(p => p.id === id)

//         if (!record) {
//             state.added.push({
//                 id,
//                 quantity: 1
//             })
//         } else {
//             record.quantity++
//         }
//     }
// }

// // one store for entire application
// export default new Vuex.Store({
//     state,
//     strict: debug,
//     getters,
//     actions,
//     mutations
// })

// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     cart: []
//   },
//   mutations: {
//     addToCart(state, product) {
//       state.cart.push(product);
//     }
//   },
//   actions: {
//     addToCart({ commit }, product) {
//       commit('addToCart', product);
//     }
//   },
//   getters: {
//     cartItems(state) {
//       return state.cart;
//     },
//     cartTotal(state) {
//       return state.cart.reduce((total, product) => total + product.price, 0);
//     }
//   }
// });

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";
// import postsModule from "./postsModule";


export default new Vuex.Store({
  // modules:
  // {
  //   posts: postsModule
  // },
  state,
  getters,
  mutations,
  actions 
})
