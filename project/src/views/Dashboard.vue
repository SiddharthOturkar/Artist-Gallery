<template>
    <div>
      <HeaderFile1/>
      
      <!-- <img src="@/assets/upload_art.jpg" style="height: 500px; width: 100%; " alt=""> -->
      
      <h1 class="upcoming_heading">Upload Details</h1>
        <!-- <h2>Dashboard</h2>
        <p>This page is only visible to users that are currently logged in</p> -->
       <div class="slideimg">
        <div class="home">
            <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
            <button @click="logout" class="btn btn-danger">Logout</button>
        </div>
        <h1 class="upcoming_heading name1">Hi Artist <b>{{name.toUpperCase()}}</b></h1>
     
      </div>
      
      <div class="uploaddiv">
          <div class="container">
            <!-- <div class="side_image">
              <img src="@/assets/upload.jpg" alt="">
            </div> -->
            <div class="imginput">
                <form @submit.prevent="uploadData" >
                  <input type="file" @change="onFileChange"  id="file" class="file1" hidden>
                  <!-- <label>Name:</label> -->
                  <!-- <input type="text" v-model="name"> -->
                  <!-- <input type="number" v-model="price" placeholder="Enter Price">  -->
                  <div class="getimg">
                    <img src="@/assets/UploadImg.png" alt="">
                    <!-- <button type="submit" class="btn btn-warning select-image">Upload Image</button> -->
                  </div>
                  <div class="getInputs">
                    <label>Artist Name</label>
                    <input type="text" v-model="name" placeholder="Artist Name">
                    <br>
                    <label>Price</label>
                    <input type="text" v-model="price" placeholder="Enter Price">
                    <br>
                    <label>Institute</label>
                    <input type="text" v-model="instname" placeholder="Your Institute">
                    <br>
                    <label>Size of Art</label>
                    <input type="text" v-model="size" placeholder="eg.32 x 60 inches">
                    <br>
                    <label>Shape of Art</label>
                    <input type="text" v-model="shape" placeholder="eg.Rectangle">
                    <br>
                    <button type="submit" class="btn btn-warning select-image">Upload Image</button>
                  </div>
                  <div class="submitbtn">
                    <button type="submit" class="btn btn-warning" @click="detailsUpload">Submit</button>
                  </div>
                </form>
            </div>
          </div>  
        </div>
        
          <!-- <li v-for="item in items" :key="item.name">
              <img v-bind:src="item.name" class="listimg" alt="No Image" target="_blank">
              <h3>{{ item.bucket }}</h3>
          </li> -->
          
          <!-- <div v-for="imageUrl in imageUrls" :key="imageUrl"  >
            <img :src="imageUrl" v-if="dataFetched" />
          </div> -->
          <!-- <div v-if="dataFetched" class="cardalign">
          <div v-for="imageUrl in imageUrls" :key="imageUrl" class="card cardstyle" style="width:200px; height:220px">
            <img :src="imageUrl" class="card-img-top" style="width:auto; height:140px" />
                <div class="card-body"> -->
                    <!-- <h4 class="card-title">Monochrome Painting</h4> -->
                    <!-- <h4 class="card-title">{{this.img_details[0]}}</h4> -->
                    <!-- <router-link to="/MonochromePainting" class="btn btn-primary bg-danger">Take a Look</router-link>
                </div>
            </div>
          </div>   -->

          <!-- <button @click="loadImage">Load Image</button>
          <InstituteImages :imageSrc="imageSrc" v-if="loaded"/> -->
          <!-- <button @click="fetchData">Fetch data</button>
          <div v-for="imageUrl in imageUrls" :key="imageUrl"  >
            <img :src="imageUrl" v-if="dataFetched" />
          </div> -->
          <FooterFile/>
    </div>
</template>

<script>
import HeaderFile1 from '@/components/HeaderFile1.vue';
import FooterFile from '@/components/FooterFile';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage'; 
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import axios from 'axios'

export default {
  name: 'DashboardPage',
  components:
  {
    HeaderFile1,
    FooterFile
  },
  data() {
    return {
      file: null,
      text: '',
      // price:null,
      showimg:false,
      items: [],
      imageUrls: [],
      dataFetched: false,
      imageSrc: '',
      loaded: false,
      img_details : [],
      sortedFiles: [],
      num:0,
      // name: '',
      // InstituteName:'',
      // url:'',
      name:'',
      price:'',
      instname:'',
      size:'',
      shape:'',
      url:'',

     
    } 
  },
  firebase: function() {
    return {
      items: firebase.database().ref().child('name'),
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      this.uploadFile(file);
    },
    uploadFile(file) {
      if (confirm('Confirm Upload?'))
      {
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
        },
          axios.post('https://retoolapi.dev/gdK6q2/data',{
              name: this.name,
              price: this.price,
              instname:this.instname,
              url: url,
              size:this.size,
              shape:this.shape,
          })
        )
            .then(response =>
            {
              console.log(response);
            })
            // Do something with the URL, e.g. save it to your database
          });
        }
      );
      }
      else
      {
        console.log("Upload new Image");
        location.reload();
      }
      
    },
    logout: function() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('LoginPage');
        })
    },
    uploadData() {
      const storageRef = firebase.storage().ref()
      const fileName = Date.now() + '_' + this.file.name
      const imageRef = storageRef.child('images/' + fileName)
      const uploadTask = imageRef.put(this.file)
      const ref = firebase.database().ref('users');
     
      const data = {
        name: this.name,
      }
      ref.push(data)
        .then(() => {
          
          console.log('Data saved successfully');
        })
        .catch((error) => {
          console.log(error);
        });
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        const db = firebase.firestore()
        firebase.database().ref('InstituteImages').push({
          url: downloadURL,
          
        })
        db.collection('data').add({
          imageUrl: downloadURL,
          // text: this.text  
          
        })
      })
    },

    //showimage button showonly one image
    geturl(){
      const storage = getStorage();
      this.showimg=true;
      // this.file = event.target.files[0];
      getDownloadURL(ref(storage, 'images/2ndCard.png'))
      .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
        console.log(url);
    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    
    // Or inserted into an <img> element
    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
    // let x = Math.floor((Math.random() * 100) + 1);
    this.img_details.push(this.price)
    console.log(this.img_details)
    
    })
    .catch(() => {
    // Handle any errors
    });
  },

   //showimage button get Multiple Image URL and storing in array (Not Executed Well from me)
  getimgname()
  {
      const storage = firebase.storage();
      const storageRef = storage.ref('images');
      // const storageRef = getStorage.ref('images')
      
      storageRef.listAll().then((result) => 
      {
        this.sortedFiles = result.items.sort((a, b) => b.timeCreated - a.timeCreated);
        // Iterate over the list of files and find the one you are looking for
        this.sortedFiles.forEach((image) => 
        {
          // Get the name of the current image
          image.getDownloadURL().then((url) => 
          {
              this.imageUrls.push(url);
          });
          const imageName = image.name;
          //ithun try kela multiple images
          let num = 1;
          
          getDownloadURL(ref(storage, 'images/'+imageName))
          .then((url) => 
          {
            num = num+1
                  // console.log(url);
                  this.items.push(url)
              // const xhr = new XMLHttpRequest();
              // xhr.open('GET', url);
              // xhr.send();
              // const img = document.getElementById('myimg'+num);
              console.log(url);
              // console.log(img.value); 
              // img.setAttribute('src', url);
            })
            .catch(() => 
            {
              // Handle any errors
            });
          // Do something with the image name
          // console.log('Image name:', imageName);
          console.log(this.items);
        });
      })
      .catch((error) => 
      {
          // Handle errors that may occur
        console.error(error);
      });
  },
  fetchData() {
      // Make your API call here, and set dataFetched to true when done
      this.dataFetched = true;
    },
  
  onAdddetails()
  {
    const storageRef = firebase.storage().ref()
      const fileName = Date.now() + '_' + this.file.name
      const imageRef = storageRef.child('images/' + fileName)
      const uploadTask = imageRef.put(this.file)
      // const ref = firebase.database().ref('users');
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        // const db = firebase.firestore()
        firebase.database().ref('InstituteImages').push({
          url: downloadURL,
          
        })
        console.log(downloadURL);
      })
    // console.log(this.post);
    axios.post(`https://artgallery-2a2a0-default-rtdb.firebaseio.com/InstituteImages.json`,this.post)
    .then(response =>
    {
      console.log(response);
    })
  },
  detailsUpload()
  {
    alert('Details Submitted Successfully');
    var form = document.querySelector("form");
  
    // Clear the input fields
    form.reset();
  }

  },
  mounted() {

    const selectImage = document.querySelector('.select-image');
    const inputFile = document.querySelector('#file');
    // const imgArea = document.querySelector('.img-area');

    selectImage.addEventListener('click', function () {
      inputFile.click();
    })

  const storageRef = firebase.storage().ref();

  // Assuming your images are stored in a folder called 'images'
  storageRef.child('images').listAll().then((result) => {
    this.sortedFiles = result.items.sort((a, b) => b.timeCreated - a.timeCreated);
    this.sortedFiles.forEach((item) => {
      item.getDownloadURL().then((url) => {
        this.imageUrls.push(url);
        this.imageUrls.sort();
          
      });
    });
  });
 
},

}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Chakra+Petch:wght@500&family=Copse&family=Josefin+Sans&family=Kanit:wght@200;400;600&family=Poppins:wght@300&family=Ubuntu&display=swap');
/* .cardalign
{
  display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 30px;
    grid-gap: 80px;
} */

.home
{
  margin-left: 90%;
  margin-top: -50px;
}
.home button
{
  font-size: 15px;
}

.imginput
{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.submitbtn button
{
  margin-top: 20px;
  height:30%;
  width: 30%;
  object-fit: contain;
  
}

.submitbtn button:hover
{
  background-color: #ddc959;
}

.getimg img
{
  height:30%;
  width: 30%;
  object-fit: contain;
  /* margin-top: -60px; */
}
.getimg button
{
  /* object-fit: cover;  */
  /* padding: 20px; */
  /* margin: 20px; */
  margin-top: 20px;
}
/* .imginput form input
{
  margin: 10px;
  font-size: small;
} */
/* .imginput form .file1
{
  margin-left: 100px;
} */

.getInputs label
{
  font-size: 20px;
  margin: 10px;

}
.getInputs input
{
  color: black;
  background-color: #fcf6bd;
  border-radius: 5px;
  text-decoration:overline;
  height: 40px;
  width: 400px;
  font-size: 13px;
  

}
.getInputs input:hover 
{
 transform: scale(1.1);
 border-color: brown;
}

.getInputs button
{
  margin-top: 5%;
}
.showimg button
{
  font-size: 15px;
  margin: 10px;
}

.slideimg
{
  height: 400px;
  justify-content: center;
  /* background-image: url('https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/89262/155364/1668761300278_AAG_000087_A__1___42835.1669109980.jpg?c=2'); */
  
}


.upcoming_heading
{
  font-size: xx-large;
  /* top: -25%; */
  font-family: 'Kanit', sans-serif;
  margin-top: 40px;
}

.name1 b
{
  font-size: 45px;
}
.uploaddiv
{
  margin-top: -20%;
}
.container {
  /* max-width: 400px; */
  /* width: 60%; */
  /* display: flex;
  flex-direction: row; */
  background: #fcf6bd;
  padding: 30px;
  border-radius: 30px;
  font-family: 'Kanit', sans-serif;
  margin-bottom: 40px;
}
.select-image {
  display: block;
  width: 100%;
  padding: 8px 0;
  border-radius: 15px;
  /* background: #0071FF;
  color: #fff; */
  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all .3s ease;
}
.select-image:hover {
  background: #ddc959;
}
</style>