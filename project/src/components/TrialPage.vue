<!-- <template>
<div class="bigdiv">
<section>
    <img src="@/assets/bg.jpg" id="bg">
    <img src="@/assets/moon.png" id="moon">
    <img src="@/assets/mountain.png" id="mountain">
    <img src="@/assets/road.png" id="road">
    <h2 id="text">Local for Vocal</h2>
  </section>
</div>

</template>

<script>
export default {
  mounted() {
    const bg = document.getElementById("bg");
    const moon = document.getElementById("moon");
    const mountain = document.getElementById("mountain"); 
    const road = document.getElementById("road");
    const text = document.getElementById("text");

    window.addEventListener('scroll',function() {
      const value = window.scrollY;
      bg.style.top = value * 0.5 + 'px';
      moon.style.left = -value * 0.5 + 'px';
      mountain.style.top = -value * 0.15 + 'px';
      road.style.top = value * 0.15 + 'px';
      text.style.top = value * 1 + 'px';
    });
  }
}
</script>

<style scoped>
*
{
  margin: 0;
  padding: 0;
}

.bigdiv
{
  background: #0a2a43;
  min-height: 1500px;
}
section
{
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

section:before
{
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, #0a2a43,transparent);
  z-index: 10000;
}

section:before
{
  content: '';
  position: absolute;
  top: 0;
  left: 100%;
  height: 100%;
  background: #0a2a43;
  z-index: 10000;
  mix-blend-mode: color;
}
section img
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  object-fit: cover;
}

#text
{
  position: relative;
  color: #fff;
  font-size: 10em;
  z-index: 1;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

#road
{
  z-index: 2;
}
</style> -->

<!-- <template>
<div class="bigcard">
  <div class="card">
    <div class="imgBx">
      <img src="@/assets/Slider1.jpg" alt="" srcset="">
    </div>
    <div class="content">
      <div class="details">
        <h2>₹1500<br><span>MET Institute</span></h2>
        <div class="data">
          <h3>342<br><span>Posts</span></h3>
          <h3>120K<br><span>Followers</span></h3>
          <h3>282<br><span>Following</span></h3>
        </div>
        <div class="actionBtn">
          <button>Follow</button>
          <button>Message</button>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="imgBx">
      <img src="@/assets/Slider1.jpg" alt="" srcset="">
    </div>
    <div class="content">
      <div class="details">
        <h2>₹1500<br><span>MET Institute</span></h2>
        <div class="data">
          <h3>342<br><span>Posts</span></h3>
          <h3>120K<br><span>Followers</span></h3>
          <h3>282<br><span>Following</span></h3>
        </div>
        <div class="actionBtn">
          <button>Follow</button>
          <button>Message</button>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="imgBx">
      <img src="@/assets/Slider1.jpg" alt="" srcset="">
    </div>
    <div class="content">
      <div class="details">
        <h2>₹1500<br><span>MET Institute</span></h2>
        <div class="data">
          <h3>342<br><span>Posts</span></h3>
          <h3>120K<br><span>Followers</span></h3>
          <h3>282<br><span>Following</span></h3>
        </div>
        <div class="actionBtn">
          <button>Follow</button>
          <button>Message</button>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="imgBx">
      <img src="@/assets/Slider1.jpg" alt="" srcset="">
    </div>
    <div class="content">
      <div class="details">
        <h2>₹1500<br><span>MET Institute</span></h2>
        <div class="data">
          <h3>342<br><span>Posts</span></h3>
          <h3>120K<br><span>Followers</span></h3>
          <h3>282<br><span>Following</span></h3>
        </div>
        <div class="actionBtn">
          <button>Follow</button>
          <button>Message</button>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="imgBx">
      <img src="@/assets/Slider1.jpg" alt="" srcset="">
    </div>
    <div class="content">
      <div class="details">
        <h2>₹1500<br><span>MET Institute</span></h2>
        <div class="data">
          <h3>342<br><span>Posts</span></h3>
          <h3>120K<br><span>Followers</span></h3>
          <h3>282<br><span>Following</span></h3>
        </div>
        <div class="actionBtn">
          <button>Follow</button>
          <button>Message</button>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="imgBx">
      <img src="@/assets/Slider1.jpg" alt="" srcset="">
    </div>
    <div class="content">
      <div class="details">
        <h2>₹1500<br><span>MET Institute</span></h2>
        <div class="data">
          <h3>342<br><span>Posts</span></h3>
          <h3>120K<br><span>Followers</span></h3>
          <h3>282<br><span>Following</span></h3>
        </div>
        <div class="actionBtn">
          <button>Follow</button>
          <button>Message</button>
        </div>
      </div>
    </div>
  </div>

 
  
</div>
</template>

<script>

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.bigcard
{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
}
/* .bigcard>* {
        flex: 1 1 1;
    } */
  

.card
{
  position: relative;
  width: 350px;
  height: 190px;
  /* height: 450px; */
  background-color: #fcf6bd;
  border-radius: 20px;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
  transition: 0.5s;
  /* margin-left: 50px; */
  margin: 3%;
}

.card:hover
{
  height: 450px;
}

.imgBx
{
  position: absolute;
  left: 50%;
  top: -50px;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background: #000;
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  transition: 0.5s;
}
.card:hover .imgBx 
{
  width: 250px;
  height: 250px;
}
/*.card:hover .imgbx
{
  width: 250px;
  height: 250px;
}*/
.imgBx img
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card .content
{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
}

.card .content .details
{
  padding: 40px;
  text-align: center;
  width: 100%;
  transition: 0.5s;
  transform: translateY(150px);
}

.card:hover .content .details
{
  transform: translateY(0);
}
.card .content .details h2
{
  font-size: 2.25em;
  font-weight: 600;
  color: #555;
  line-height: 1.2em;
}
.card .content .details h2 span
{
  font-size: 0.75em;
  font-weight: 500;
  opacity: 0.5;
}

.card .content .details .data
{
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.card .content .details .data h3
{
  font-size: 1.5em;
  color: #555;
  line-height: 1.2em;
  font-weight: 600;
}

.card .content .details .data h3 span
{
  font-size: 0.85em;
  font-weight: 400;
  opacity: 0.5;
}
.card .content .details .actionBtn
{
  display: flex;
  justify-content: space-between;
  /* gap: 20px; */
}

.card .content .details .actionBtn button
{
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1.5em;
  font-weight: 500;
  background: #e6da96 ;
  color: #000000;
  cursor: pointer;
}

.card .content .details .actionBtn button:nth-child(2)
{
  border: 1px solid #999;
  color: #999;
  background: #fff;
}
</style> -->


<!-- <template>
  <div class="uploaddiv">
  <div class="container">
    <input type="file" id="file" accept="image/*" hidden @change="onFileChange">
    <div class="img-area" :data-img="imagePreviewUrl" :class="{ active: imagePreviewUrl }">
      <i class='bx bxs-cloud-upload icon'></i>
      <h3>Upload Image</h3>
      <p>Image size must be less than <span>2MB</span></p>
      <img v-if="imagePreviewUrl" :src="imagePreviewUrl" alt="Selected image">
    </div>
    <button class="select-image" @click="openFileSelector">Select Image</button>
  </div>
</div>
</template>

<script>


</script>

<style scoped>


.uploaddiv {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #B6DBF6;
}


.container {
  max-width: 400px;
  width: 100%;
  background: #fff;
  padding: 30px;
  border-radius: 30px;
}
.img-area {
  position: relative;
  width: 100%;
  height: 240px;
  background: #f2f2f2;
  margin-bottom: 30px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.img-area .icon {
  font-size: 100px;
}
.img-area h3 {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 6px;
}
.img-area p {
  color: #999;
}
.img-area p span {
  font-weight: 600;
}
.img-area img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 100;
}
.img-area::before {
  content: attr(data-img);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  color: #fff;
  font-weight: 500;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: 0;
  transition: all .3s ease;
  z-index: 200;
}
.img-area.active:hover::before {
  opacity: 1;
}
.select-image {
  display: block;
  width: 100%;
  padding: 16px 0;
  border-radius: 15px;
  background: #0071FF;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all .3s ease;
}
.select-image:hover {
  background: #005DD1;
}
</style> -->
<!-- 
<template>
  <div>
    <form @submit.prevent="uploadImage">
      <input type="file" @change="onFileSelected">
      <button type="submit">Upload</button>
    </form>
  </div>
</template>



<script>

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/storage'; 
// import {  ref, getDownloadURL } from "firebase/storage";
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
const storageRef = firebase.storage().ref()
const databaseRef = firebase.database().ref()

export default {
  data() {
  return {
    imageUrl: null
  }
},
  name: 'ImageUploader',
  methods: {
  async uploadImage() {
    // Generate a unique ID for the image file
    const fileId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    // Upload the file to Firebase Storage
    const fileRef = storageRef.child(`images/${fileId}`)
    await fileRef.put(this.selectedFile)
    // Get the URL of the uploaded file
    const downloadURL = await fileRef.getDownloadURL()
    // Store the URL in Firebase Realtime Database
    databaseRef.child(`images/${fileId}`).set({
      url: downloadURL
    })
  },
  onFileSelected(event) {
    this.selectedFile = event.target.files[0]
  }
},
mounted() {
  databaseRef.child('images').on('child_added', snapshot => {
    this.imageUrl = snapshot.val().url
  })
}


  
}
</script> -->

<!-- <template>
  <div>
    <input type="file" @change="handleImageUpload" />
  </div>
</template> -->

<!-- <script>
import firebase from 'firebase/compat/app'
import 'firebase/storage'
import 'firebase/database'
const storage = firebase.storage();
export default {
methods: {
  handleImageUpload(event) {
    const file = event.target.files[0];
    const storageRef = storage.ref(`images/${file.name}`);

    storageRef.put(file).then(() => {
      storageRef.getDownloadURL().then((url) => {
        console.log(url); // Log the URL in the console
        // Do whatever you want with the URL, such as storing it in your database
      });
    });
  }
}
}

</script> -->
<!-- 
<template>

  <div>
    Hello
  </div>
</template>

<script>
import { getStorage,deleteObject } from '@firebase/storage';
import { ref, getDownloadURL } from 'vue';
const storage = getStorage(); //get method for storage service
const storageRef = ref(storage); //reference to storage

const imageRef = ref(storage,'arts') //arts is directory name
const sparkyRef = ref(storage,'arts/sparky.jpg') //reference to image instead of file

//How to upload file
uploadBytes(sparkyRef,file)
.then((snapshot)=>
{
  console.log('Uploaded blob file');
})

//How to download file
getDownloadURL(sparkyRef)
.then((url)=> //url is download url for file
{
  //this can be downlaod directly
  const xhr  = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = (event)=>
  {
    const blob = xhr.response;
  };

  xhr.open('GET',url);
  xhr.send();

  // or inserted using <img> element
  const img = document.getElementById('myimg');
  img.setAttribute('src',url); 
})

.catch((error)=>
{
  //Handle errors
})

//delete file
deleteObject(sparkyRef).then(()=>
{
  console.log('Deleted');
})
.catch((err)=>
{
  console.log(err);
})



</script> -->

<!-- <template>
  <div>
    <input type="file" ref="fileInput" @change="onFileChange">
    <button @click="$refs.fileInput.click()">Upload File</button>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
// import { getDatabase, ref, set } from "firebase/database";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage'; 
import axios from 'axios'

export default {
  name: 'FileUpload',
  data() {
    return {
      
        name:'sidd',
        price:'1500₹',
        instname:'MET',
        size:'12x15 inches',
        shape:'Circle',
        url:''
      
    } 
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      this.uploadFile(file);
    },
    uploadFile(file) {
      const storageRef = firebase.storage().ref('images');
      const fileRef = storageRef.child(file.name);
      const task = fileRef.put(file);

      task.on('state_changed', 
        (snapshot) => {
          // Handle progress
          console.log(snapshot);
        },
        (error) => {
          // Handle errors
          console.log(error);
        },
        () => {
          // Handle successful upload
          task.snapshot.ref.getDownloadURL().then((url) => {
            console.log(url);
            // this.writeUserData('03','Sidd','Sidda@gmail.com',url);
            axios.post(`https://artgallery-2a2a0-default-rtdb.firebaseio.com/InstituteImages.json`, {
              name: this.name,
              price: this.price,
              instname:this.instname,
              url: url,
              size:this.size,
              shape:this.shape,
        })
            .then(response =>
            {
              console.log(response);
            })
            // Do something with the URL, e.g. save it to your database
          });
        }
      );
    },
    // writeUserData(userId, name, email, imageUrl) {
    //           const db = getDatabase();
    //           set(ref(db, 'InsituteImages/' ), {
    //             username: name,
    //             email: email,
    //             profile_picture : imageUrl
    //           });
    //         }
  },
  
 
}
</script> -->
<!-- 
<template>
  
  <div>
    <button @click="getPosts">Show Data</button>
    <div class="bigcard" v-if="KKW">
      <div class="card" v-for="(post,index) in postsdata" :key="index">
        <div class="imgBx">
          <img :src="postsdata[index].url" alt="" id="myImage" srcset="">
        </div>
        <div class="content">
          <div class="details">
            <h2>₹{{ postsdata[index].price }}<br><span>{{ postsdata[index].instname }}</span></h2>
            <div class="data">
              <h3>{{ postsdata[index].shape }}<br><span>Shape</span></h3>
              <h3>{{ postsdata[index].name }}<br><span>Artist Name</span></h3>
              <h3>{{ postsdata[index].size }}<br><span>Size</span></h3>
            </div>
            <div class="actionBtn">
              <button>Follow</button>
              <button>Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';
export default 
{
  data() {
            return {
              KKW:true,
              postsdata:[]
            }
        },
        methods:
        {
          getPosts()
    {
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
        this.postsdata.push({...posts[key],id:key}); //destructuring via spread operator ...
      }
      // console.log(this.postsdata);
      // var imageElement = document.getElementById("myImage");
      // imageElement.src = this.postsdata[1].url;
      // console.log(this.postsdata[0].url);
    }
        }
  
}
</script>

<style>
.bigcard
{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Kanit', sans-serif;
  
}
/* .bigcard>* {
        flex: 1 1 1;
    } */
  

.card
{
  position: relative;
  width: 350px;
  height: 190px;
  /* height: 450px; */
  background-color: #fcf6bd;
  border-radius: 20px;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
  transition: 0.5s;
  /* margin-left: 50px; */
  margin: 3%;
}

.card:hover
{
  height: 450px;
}

.imgBx
{
  position: absolute;
  left: 50%;
  top: -50px;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background: #000;
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  transition: 0.5s;
}
.card:hover .imgBx 
{
  width: 250px;
  height: 250px;
}
/*.card:hover .imgbx
{
  width: 250px;
  height: 250px;
}*/
.imgBx img
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card .content
{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
}

.card .content .details
{
  padding: 40px;
  text-align: center;
  width: 100%;
  transition: 0.5s;
  transform: translateY(150px);
}

.card:hover .content .details
{
  transform: translateY(0);
}
.card .content .details h2
{
  font-size: 2.25em;
  font-weight: 600;
  color: #555;
  line-height: 1.2em;
}
.card .content .details h2 span
{
  font-size: 0.75em;
  font-weight: 500;
  opacity: 0.5;
}

.card .content .details .data
{
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.card .content .details .data h3
{
  font-size: 1.5em;
  color: #555;
  line-height: 1.2em;
  font-weight: 600;
}

.card .content .details .data h3 span
{
  font-size: 0.85em;
  font-weight: 400;
  opacity: 0.5;
}
.card .content .details .actionBtn
{
  display: flex;
  justify-content: space-between;
  /* gap: 20px; */
}

.card .content .details .actionBtn button
{
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1.5em;
  font-weight: 500;
  background: #e6da96 ;
  color: #000000;
  cursor: pointer;
}

.card .content .details .actionBtn button:nth-child(2)
{
  border: 1px solid #999;
  color: #999;
  background: #fff;
}

</style> -->


<!-- <template>
  <div>
    <button v-if="isLoggedIn" @click="login">Login</button>
    <button v-else-if="logout1" @click="logout">Logout</button>
  </div>
</template>
<script>
export default
{
  data() {
    return {
      isLoggedIn:true,
      logout1:false
    }
  },
  methods: {
  login() {
    // Perform login logic
    this.isLoggedIn = false
    this.logout1 = true
  },
  logout() {
    // Perform logout logic
    this.logout1 = false
    this.isLoggedIn = true
  }
}

}

</script> -->

<!-- <template>
  <div>
    <h2>{{ product.name }}</h2>
    <p>{{ product.price }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>


export default {
  data()
    {
        return{
          //  product:[{
          //   name:'Sidd',
          //   price:125
          //  }]
        }
    },
  props: {
    product: Object
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addProductToCart', this.product)
    }
  }
}
</script> -->


<template>
  <div>
        <!-- <div>
          <button class="twilio" v-on:click='handleClick'>Say Hello via SMS!</button>
          <p>{{status}}</p>
        </div> -->
     
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/ProductsPage" class="nav-item nav-link active">Home</router-link>
          <!-- <a class="nav-item nav-link active" href="#">Home</a> -->
          <a class="nav-item nav-link" href="#">Product</a>
        </div>

        <div>
          <div class="dropdown open">
              <button 
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >{{ cartLength }} cart</button>

              <!-- <div @click="$event.stopPropagation"> -->
                <miniCArt></miniCArt> 
                <!-- </div> -->
          </div>
        </div>
      </div>
      </nav>

      <button @click="deleteData">Delete</button>
     
  </div>


</template>

<script>
import axios from 'axios';
import miniCArt from '@/components/miniCArt';
// import { response } from 'express';
export default{
  name:'TrialPage',
  data() {
    return {
      // status:JSON.parse(localStorage.getItem("array")),  
      cartLength:0,
      loading: true,
    }
  },
  methods: {
    deleteData()
    {
      axios.delete(`https://retoolapi.dev/6ysODg/cart/1`)
      .then(response=>{
        console.log(response.data);
      })
    },
  //  async handleClick(){
    
  //   const response = await fetch(`https://vue-sms-3255.twil.io/sms`);
  //    const data = await response.json();
  //    this.status = data.status;
  //  }
 },
    components: 
    {
      miniCArt
    },
    computed:
    {
      cartItemCount()
      {
        
        return this.$store.getters.cartItemCount;
        // return this.status.length;
      },
       cart()
        {   
            return this.$store.state.cart; //id& quantity
        },
    },
    mounted()
    {
      axios.get(`https://retoolapi.dev/6ysODg/cart`)
            .then(response=>{
              this.cartLength=response.data.length;
                // console.log(response.data.length);
            });
      
           
    }
} 
</script>
<style scoped>
.twilio
{
   color: #000;
   padding: 15px 10px;
   border: 1px solid black;
   border-radius: 3px;
}

.twilio:hover {
   color: #fff;
   background: navy;
 }

 .lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #040202;
  border-color: #df0c0c transparent #0d0101 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>