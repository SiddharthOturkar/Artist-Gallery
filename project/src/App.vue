<template>
  <div id="app">
    <!-- <nav class="navbar navbar-expand-lg bg-warning"> -->
    <!-- <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid ">
                <a class="navbar-brand" href="#">Artist Gallery</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            
                            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item dropdown">
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
                        </li>
                        <li class="nav-item">
                           
                            <a class="nav-link"><router-link to="/BuyPainting" class="dec">Buy</router-link></a>
                        </li>
                      
                        <li class="nav-item">
                            
                            <a class="nav-link"><router-link to="/ArtHistory" class="dec">History of Art</router-link></a>
                        </li>

                        <li class="nav-item">
                          <a class="nav-link" id="loginbtn"><router-link to="/LoginPage"  class="dec" >Login</router-link></a>
                      
                        </li>

                      

                        <li class="nav-item"  >
                          <a class="nav-link"><router-link to="/Dashboard" class="dec">Dashboard</router-link></a>
                        </li>
                        
                        
                        <li class="nav-item cart">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                          </svg>
                              <div class="dropdown open nav-link cart-dropdown">
                                  <button 
                                  class="btn dropdown-toggle"
                                  type="button"
                                  id="triggerId"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  >{{ cartItemCount }} cart</button>

                                    <miniCArt></miniCArt>   
                              </div>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav> -->
        <!-- <TrialPage/> -->

    <router-view></router-view>
  </div>
</template>

<script>
// import miniCArt from '@/components/miniCArt';
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
    // miniCArt,
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Chakra+Petch:wght@500&family=Copse&family=Josefin+Sans&family=Kanit:wght@200;400;600&family=Poppins:wght@300&family=Ubuntu&display=swap');
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Kanit', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #17232c;
  background-color: rgb(251, 248, 240);
  /* margin-top: 60px; */
}

.navbar-brand
{
  /* font-family: 'Lato', sans-serif; */
  color:rgb(3, 3, 3);
  font-size: 40px;
  /* padding-left: 15px; */
  padding: 13px;
}

#navbarNavDropdown
{
  /* font-family: 'Lato', sans-serif; */
  color:rgb(3, 3, 3);
  font-size: 15px;
  margin: 10;
  /* padding-left: 15px; */
  padding: 13px;
}
.dropdown-menu
{
  /* font-family: 'Lato', sans-serif; */
  color:rgb(3, 3, 3);
  font-size: 15px;
  margin: 10;
  /* padding-left: 15px; */
  padding: 13px;
  background-color: rgba(254, 254, 250, 0.687);
}

.nav-item
{
    margin-left: 40px;
    font-size: 15px;
    font-weight: bolder;
}
.dec
{
  text-decoration: none;
  color: rgb(3, 3, 3);
}
.cart
{
  display: flex;
  flex-direction: row;
}
.cart svg
{
  margin-top: 14px;
}
.cart-dropdown
{
  margin-top: 7px;
}
</style>
