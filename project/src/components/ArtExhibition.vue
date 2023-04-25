<template>
  <div class="a1">

 <!------------------------------------ Main Header------------- -------------------------------->

    <div class="HeaderImage">
      <HeaderFile class="navbar_container"/>
      <div class="lettering">
        
        <div class="main_heading">
          <h1>Unleashing Creativity</h1>
        </div>

        <div class="sub_heading">
          <h1>A Multidimensional Art Exhibition</h1>
        </div>

        <div class="button_heading">
          <router-link to="/ProductsPage"><button>Explore Now!</button></router-link>
        </div>
      </div>
    </div>
    
  <!------------------------------------ Vocal For Local------------- -------------------------------->


    <div class="wrapper">
      <div class="one1">
        <img src="@/assets/paintwall.jpg" alt="">
      </div>
      <div class="one2">
        <h1>Vocal for Local</h1>
        <hr class="hrline">
      </div>
      <div class="one3">
        <p class="txt1">Everyone is <b>Artist</b> & <b>Yes</b> ! You can showcase your Art on our website & customers will reach out to you for buying your <b>Creative & Amazing Paintings !</b> </p>
        <div class="btn_align">
          <button @click="uploadArt">Upload Your Arts</button> 
          <router-link to="/ProductsPage"><button>Take a look on Amazing Paintings</button></router-link> 
        </div>
      </div>
</div>


 <!------------------------------------ Upcoming Card Starts from Here -------------------------------->
  <div class="exhibition">
    <h1 class="upcoming_heading" >Upcoming Exhibhitions</h1>
    <div class="upcoming">
      <div class="upcoming_container">
        <div class="upcoming_card">
          <div class="circle">
            <h2>01</h2>
          </div>
          <div class="upcoming_content">
            <h1>MET BKC</h1>
            <p><b>Date:</b>16th April <br> <b>Location:</b>MET Bhujbal Knowledge City,Near Adgaon, Nashik<br><b>Contact:</b> 098811 00099</p>
            <a  @click="InstituteImg('MET')">Show Paintings</a>
          </div>
        </div>
        <div class="upcoming_card">
          <div class="circle">
            <h2>02</h2>
          </div>
          <div class="upcoming_content">
            <h1>KKW Institute</h1>
            <p><b>Date:</b>18th April <br> <b>Location:</b>KK Wagh College,Mumbai Agra Road,Panchvati, Nashik<br><b>Contact:</b> 0253 251 2867</p>
            <a @click="InstituteImg('KKW')">Show Paintings</a>
          </div>
        </div>
        <div class="upcoming_card">
          <div class="circle">
            <h2>03</h2>
          </div>
          <div class="upcoming_content">
            <h1>COEP Pune</h1>
            <p><b>Date:</b>26th April <br> <b>Location:</b>College of Engineering Pune,Wellesley Rd, Shivajinagar, Pune<br><b>Contact:</b> 020 2550 7000</p>
            <a @click="InstituteImg('COEP')">Show Paintings</a>
          </div>
        </div>

      </div>
  </div>
</div>

 <!------------------------------------ Best Sellers Code-------------------------------->
 
 <div class="bestSellers">
      <h1 class="upcoming_heading" >Best Sellers</h1>
      <SliderFile/>
</div>

 <!------------------------------------ Footer Starts from Here -------------------------------->
    <FooterFile/>
  </div>
</template>

<script>
// import ProductsPage from './ProductsPage.vue'
import HeaderFile from './HeaderFile.vue';
import SliderFile from './SliderFile.vue';
import FooterFile from '@/components/FooterFile';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default 
{
  data() {
            return {
              // KKW:false,
              // MET:false,
              postsdata:[],
              instname_value:'',
              current_val:false,
              
            }
        },
        components:
        {
          // ProductCard, 
          FooterFile,
          SliderFile,
          // ProductsPage,
          HeaderFile
        },
        methods:
        {
          InstituteImg(value)
          {
            this.instname_value=value; //MET
            this.getPosts();
            this.current_val=true;
          },
          
          addToCart(){
            this.$store.dispatch("addProductToCart",{
              product:this.product,
              quantity:1
            })
          },
          
          getPosts()
          {
            if(this.KKW == false)
                  {
                    this.KKW=true
                  }
                  else
                  {
                    this.KKW=false
                  }
            axios.get(`https://artgallery-2a2a0-default-rtdb.firebaseio.com/InstituteImages.json`)
            .then(response=>
            {
              // console.log(response.data);
              this.formatPostData(response.data);
            });
          },

          formatPostData(posts)
          {
            this.postsdata = [];
            for(let key in posts)
            {
              if(posts[key].instname==this.instname_value)
              {
                this.postsdata.push({...posts[key],id:key}); //destructuring via spread operator ...
              }
            }
          },

          uploadArt()
          {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
              if (user) {
                // User is sign in
                this.$router.replace('Dashboard');
              } else {
                // User is signed out
                console.log('Hello111');
                this.$router.replace('/LoginPage');
              }
            });
          }
        },  
    computed:{
      products(){
        return this.$store.state.products;
      }
    },  
  mounted() {
    this.$store.dispatch('getProducts');

    // let text = document.getElementById('text');
    // window.addEventListener('scroll', function () {
    //   let value = window.scrollY;
    //   text.style.marginBottom = value * 2 + 'px';
    // });
  },
  // computed: {
  //   filteredPosts() {
  //     return this.postsdata.filter(post => post.instname == "KKW")
  //   }
  // }
};
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500&family=Copse&family=Josefin+Sans&family=Kanit:wght@200;400;600&family=Poppins:wght@300&family=Ubuntu&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Chakra+Petch:wght@500&family=Copse&family=Josefin+Sans&family=Kanit:wght@200;400;600&family=Poppins:wght@300&family=Ubuntu&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.a1
{
  margin-top: -1.5%;
}


/* _____________________Header Image________________________________ */
.HeaderImage
{
  /* margin-top: -100px; */
  background-image: url("@/assets/HomeSlider1.png");
  min-height: 700px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* _____________________Header Image Text________________________________ */
.lettering
{
  position: absolute;
  top: 100px;
  width: 40%;
  margin-top: 80px;
  color: #ABC4AA;
  margin-left: 30%;
  /* border: 1px dotted red; */
}


.lettering .main_heading h1
{
  font-size: 50px;

}
.lettering .button_heading button
{
  margin-top: 100px;
  /* background-color: white; */
  background-color: #ABC4AA;
  border-radius: 20px;
  padding: 8px 100px 8px 100px;
  border: none;
  font-size: 15px;
  font-weight: bold;
  color: #17232C;
  transition: 0.5s;
}

.lettering .button_heading button:hover
{
  transform: scale(1.1);
}
.navbar_container
{

  position: absolute;
  margin: 20px;
  width: auto;

}

section
{
  position: relative;
  padding: 75px 100px;
}

section h2
{
  position: relative;
  font-size: 2.5em;
  margin-bottom: 20px;
}




/* Upcoming Cards Styling Starts from here */
.exhibition
{
  /* margin-top: -40px; */
  background-color:  rgb(249, 246, 236)
}
.upcoming_heading
{
font-size:5rem;
/* text-decoration: 1px solid underline; */
padding-top: 20px;
}
.upcoming
{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-attachment: fixed;
  margin-top: -3%;
  /* font-family: 'Josefin Sans', sans-serif;  */
font-family: 'Kanit', sans-serif;
}

.upcoming_container
{
  position: relative;
  width: 1150px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.upcoming_container .upcoming_card
{
  position: relative;
  width: 300px;
  height: 380px;
  background: #fff;
  margin: 20px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.upcoming_container:hover .upcoming_card
{
  /* filter: blur(1px); */
  transform: scale(0.9);
  /* opacity: 0.5; */
}

.upcoming_container .upcoming_card:hover
{
  /* filter: blur(0px); */
  transform: scale(1.1);
  /* opacity: 1; */
}

.upcoming_container .upcoming_card .circle
{
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
  clip-path: circle(180px at center 0);
  text-align: center;
}

.upcoming_container .upcoming_card .circle h2
{
  color: #fff;
  font-size: 4.5rem;
  padding: 30px 0;
}

.upcoming_container .upcoming_card .upcoming_content
{
  position:absolute;
  bottom: 10px;
  padding: 20px;
  text-align: center;
}

.upcoming_container .upcoming_card .upcoming_content p
{
  color: #666;
}

.upcoming_container .upcoming_card .upcoming_content a
{
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  background: #000;
  color: #fff;
  border-radius: 40px;
  text-decoration: none;
  margin-top: 20px;
  cursor: pointer;
}

.upcoming_container .upcoming_card:nth-child(n) .circle,
.upcoming_container .upcoming_card:nth-child(n) .upcoming_content a
{
  background-color: #ABC4AA;

} 
.upcoming_container .upcoming_card:nth-child(n) .circle:hover,
.upcoming_container .upcoming_card:nth-child(n) .upcoming_content a:hover
{
  background-color: #17232C;

} 


.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 100px;
  grid-auto-rows: minmax(100px, auto);
}

.one1 {
  grid-column: 1/2;
  grid-row: 1/4;
  /* border:2px solid #ABC4AA; */
}
.one1 img
{
  height: 270px;
  width: 300px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: -10px 10px 8px #ABC4AA;
}
.one2 {
  grid-column: 2/4;
  grid-row: 1;
  padding: 20px;
  /* border:2px solid #ABC4AA; */
}
.one2 h1
{
  font-size: 5rem;
  margin-top: 20px;
}
.one2 .hrline
{
  margin-top: 15px;
}
.one3 {
  grid-column: 2/4;
  grid-row: 1/4 ;
  /* border:2px solid #ABC4AA; */
  padding: 25px;
  padding-top: 130px;
  margin: 10px 40px 20px 40px;
  text-align: justify;
  text-justify: inter-word;
}

.one3 button
{
  padding: 0px 20px;
  margin-top: 25px;
  margin-left: 20px;
  border-radius: 10px;
  font-size: 18px;
  background-color: #17232C;
  color: #ABC4AA;
  border: none;
  transition: 0.5s;
}
.one3 button:hover
{
  transform: scale(1.1);
}
.btn_align
{
  margin-left: 50px;
}


/* --------------------------Media Query-------------------------------- */




</style>