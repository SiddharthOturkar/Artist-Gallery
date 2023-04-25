<template>
    <div>
      <HeaderFile1/>
      
      <h1 class="upcoming_heading">Upload Details</h1>
        <div class="slideimg">
          <div class="home">
              <button @click="logout" class="btn logoutbtn">Logout</button>
          </div>
          <h1 class="upcoming_heading name1">Hi Artist <b>{{name.toUpperCase()}}</b></h1>
          <div class="hrl">
            <hr class="hrline">
          </div>
        </div>
      
      <div class="main_div">
        <div class="drawing_img">
          <img src="@/assets/drawing_stand.png" alt="">
        </div>

        <div class="uploaddiv">
            <div class="container">
              <div class="imginput">
                  <form @submit.prevent="uploadData" >
                    <input type="file" @change="onFileChange"  id="file" class="file1" hidden>
                    <!-- <div class="getimg">
                      <img src="@/assets/UploadImg.png" alt="">
                    </div> -->
                    <div class="getInputs">
                      <label>Artist Name</label><br>
                      <input type="text" v-model="name" placeholder="Artist Name">
                      <br>
                      <label>Price</label><br>
                      <input type="text" v-model="price" placeholder="Enter Price">
                      <br>
                      <label>Institute</label><br>
                      <input type="text" v-model="instname" placeholder="Your Institute">
                      <br>
                      <label>Size of Art</label><br>
                      <input type="text" v-model="size" placeholder="eg.32 x 60 inches">
                      <br>
                      <label>Shape of Art</label><br>
                      <input type="text" v-model="shape" placeholder="eg.Rectangle">
                      <br>
                      <div class="subbtn">
                        <button type="submit" class="btn  select-image">Upload Image</button>
                      </div>
                    </div>
                    <div class="submitbtn">
                      <button type="submit" class="btn  submitbtn1" @click="detailsUpload">Submit</button>
                    </div>
                  </form>
              </div>
            </div>  
          </div>
        </div>
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
      showimg:false,
      items: [],
      imageUrls: [],
      dataFetched: false,
      imageSrc: '',
      loaded: false,
      img_details : [],
      sortedFiles: [],
      num:0,
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

   //showimage button get Multiple Image URL and storing in array 
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
              console.log(url);
            })
            .catch(() => 
            {
              // Handle any errors
            });
          // Do something with the image name
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

.main_div
{
  display: flex;
  flex-direction: row;
  /* border: 2px solid red; */
}
.drawing_img
{
  height: auto;
  width: auto;
  /* border: 2px solid red; */
}
.drawing_img img
{
  height: auto;
  width: auto;
  padding-left: 5%;
  
}
.upcoming_heading
{
  color: #395f72;
  font-weight: bold;
}

.imginput
{
  padding-left: 30%;
  padding-top: 5%;
  padding-bottom: 10%;
}
.home
{
  margin-left: 90%;
  margin-top: -50px;
}


.getInputs label
{
  font-size: 20px;
  margin: 10px;
  /* border: 2px solid red; */
  width: 100%;
  text-align: start;
  color: #395f72;

}
.getInputs input
{
  color: #395f72;
  background-color: rgb(251, 248, 240);
  height: 40px;
  width: 400px;
  font-size: 20px;
  border-radius: 10px;
  border:2px solid #395f72;

}

::placeholder
{
  font-size: 13px;
  padding-left: 10px;
}

.name1
{
  margin-top: 20px;
}
.name1 b
{
  font-size: 45px;
}

.subbtn
{
  width: 100%;
  text-align: start;
}
.select-image
{
  background-color: #395f72;
  color: #fff;
  margin-top: 20px;
  font-size: 15px;
}

.select-image:hover
{
  background-color: #ABC4AA;
  color: #395f72;
}
.submitbtn
{
  margin-top: 20px;
  text-align: start;

}
.submitbtn1
{
  background-color: #395f72;
  color: #fff;
  font-size: 15px;
  width: 30%;
  
  transition: 0.5s;
}
.submitbtn1:hover
{
  transform: scale(1.1);
}

.logoutbtn
{
  background-color: #395f72;
  color: #fff;
  font-size: 15px;
}

.logoutbtn:hover
{
  background-color: #ABC4AA;
  color: #395f72;
}
.hrl
{
  margin-left:35%;
}
.hrline
{
  width: 50%;
}
</style>