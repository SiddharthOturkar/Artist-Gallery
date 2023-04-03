<template>
    <div id="app1">
      <!-- <nav class="navbar navbar-expand-lg bg-warning"> -->
      <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid ">
                    <img src="@/assets/aglogo_white.png" class="logo" alt="">
                    <a class="navbar-brand" href="#">Artist Gallery</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                      aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  
                  <div class="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul class="navbar-nav">
                          <li class="nav-item">
                              
                            <a class="nav-link"><router-link class="active" aria-current="page" to="/">Home</router-link></a>
                          </li>
                          <!-- <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                  aria-expanded="false">
                                  Paintings
                              </a>
                              <ul class="dropdown-menu">
                                  <li><router-link to="/AbstractPainting" class="dropdown-item">Abstract Painting</router-link></li>
                                 
                                  <li><router-link to="/CityscapePaint" class="dropdown-item">Cityscape Painting</router-link></li>
                                  <li><router-link to="/FigurativePainting" class="dropdown-item">Figurative Painting</router-link></li>
                                  
                                  <li><router-link to="/BirdsPainting" class="dropdown-item">Bird Art</router-link></li>
                                  <li><router-link to="/MonochromePainting" class="dropdown-item">Monochrome Painting</router-link></li>
                                  <li><router-link to="/WarliPainting" class="dropdown-item">Warli Painting</router-link></li>
                                  <li><router-link to="/Abc" class="dropdown-item">Trial Page</router-link></li>
                              
                              </ul>
                          </li> -->
                          <li class="nav-item">
                             
                              <a class="nav-link"><router-link to="/BuyPainting" class="dec">Shop</router-link></a>
                          </li>
                          
                          <!-- <li class="nav-item">
                             
                             <a class="nav-link"><router-link to="/InstituteImages" class="dec">Institute Paintings</router-link></a>
                         </li> -->
  
                          <li class="nav-item">
                              
                              <a class="nav-link"><router-link to="/ArtHistory" class="dec">History of Art</router-link></a>
                          </li>
  
                          <!-- <li class="nav-item">
                            <a class="nav-link" ><router-link to="/LoginPage" class="dec" >LogOut</router-link></a>
                          </li> -->
  
                          <!-- <li class="nav-item"  >
                            <a class="nav-link"><router-link to="/Dashboard" class="dec">Dashboard</router-link></a>
                          </li> -->
                          
                          <li class="nav-item"  >
                            <a class="nav-link"><router-link to="/AboutUs" class="dec">About</router-link></a>
                          </li>

                          <li class="nav-item cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                                <div class="dropdown nav-link cart-dropdown  ">
                                    <button 
                                    class="btn dropdown-toggle cartbtn"
                                    type="button"
                                    id="triggerId"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    >{{ cartItemCount }} cart</button>
  
                                      <miniCArt></miniCArt>   
                                </div>
                          </li>

                          
                          <li class="nav-item register-btn loginbtn">
                            <a class="nav-link" id="loginbtn"><router-link to="/LoginPage"  class="dec" >Login</router-link></a>
                            <!-- <a class="nav-link dec" id="loginbtn" v-if="isLoggedIn" @click="login">Login</a>
                            <a class="nav-link dec" id="loginbtn" v-else-if="logout1" @click="logout">Logout</a> -->
                        
                          </li>

                          <li class="nav-item loginbtn">
                            <a class="nav-link" id="loginbtn"><router-link to="/SignUp" class="dec" >Register</router-link></a>
                            <!-- <a class="nav-link dec" id="loginbtn" v-if="isLoggedIn" @click="login">Login</a>
                            <a class="nav-link dec" id="loginbtn" v-else-if="logout1" @click="logout">Logout</a> -->
                        
                          </li>
                       
                      </ul>
                  </div>
              </div>
          </nav>
          <!-- <TrialPage/> -->
  
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import miniCArt from '@/components/miniCArt';
  // import { bus } from './main.js'
  // import firebase from 'firebase/compat/app';
  //   import 'firebase/compat/auth';
  //   import 'firebase/compat/firestore';
  // import {mapGetters} from 'vuex';
  // import TrialPage from './components/TrialPage.vue'
  export const IS_USER_AUTHENTICATE_GETTER = '[getters] is user authenticated'; 
  export default {
    
    // [IS_USER_AUTHENTICATE_GETTER](state)
    // {
    //   return !!state.token;
    // },
    data()
    {
      return{
      // loginbtn: true,
      // logoutbtn: false,
      imageUrls: [],
      // isLoggedIn:true,
      // logout1:false,
    
      }
    },
    name: 'App',
    components: {
      miniCArt,
      // TrialPage
    },
    methods:
    {
    
    },
    computed:
      {
        cartItemCount()
        {
          return this.$store.getters.cartItemCount;
        }
      }
    
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Chakra+Petch:wght@500&family=Copse&family=Josefin+Sans&family=Kanit:wght@200;400;600&family=Poppins:wght@300&family=Ubuntu&display=swap');
  
  .navbar
  {
    background:linear-gradient(to left top, #17232C, #395F72);
  }

  /* AG Logo Styling */
  .logo
  {
    height: 40px;
    width: 40px;
    margin-top: -5px;
  }
  
  /* Artist Gallery Name Styling */
/* .mainheader{
  background:linear-gradient(to left top, #17232C, #395F72);
} */
  .navbar-brand
  {
    /* font-family: 'Lato', sans-serif; */
    color:#fff;
    font-size: 30px;
    /* padding-left: 15px; */
    padding: 13px;
    padding-left: 20px;
  }
  
  #navbarNavDropdown
  {
    /* font-family: 'Lato', sans-serif; */
    color:#fff;
    font-size: 15px;
    margin: 10;
    margin-left: 100px;
    /* padding-left: 15px; */
    padding: 13px;
  }
  .dropdown-menu
  {
    /* font-family: 'Lato', sans-serif; */
    color:white;
    font-size: 15px;
    margin: 10;
    /* padding-left: 15px; */
    padding: 13px;
    background-color: rgba(57, 95, 114, 0.687);
  }
  
  .nav-item
  {
      margin-left: 40px;
      font-size: 15px;
      font-weight: bolder;
  }
  .nav-item a 
  {
    color: #fff;
    transition: 0.5s;
    /* color: #ABC4AA; */
  } 
  .nav-item a:hover
  {
    /* transform: scale(1.05); */
    color: #abc4aa;
  }
  .cartbtn
  {
    color: #fff;
    font-size: 15px;
    margin-top: -3px;
  }
  /* .dec
  {
    text-decoration: none;
    color: rgb(3, 3, 3);
  } */
  .cart
  {
    display: flex;
    flex-direction: row;
  }
  .cart svg
  {
    margin-top: 16px;
  }
  .cart-dropdown
  {
    margin-top: 7px;
  }

  /* register buttons styling */
  
  .register-btn
  {
    margin-left: 150px;
  }

  /* .loginbtn #loginbtn
  {
    position: relative;
    background-color: #abc4aa;
    border-radius: 5px;
    height: 30px;
    width: 50px;
  } */
  </style>
  