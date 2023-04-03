<template>
    <div>
      <!-- <ul>
        <li v-for="(user, index) in users" :key="index">
          <p>Name: {{ user.name }}</p>
        </li>
      </ul> -->

      <!-- <div class="row">
        <div class="col-md-4" v-for="post in postsdata" :key="post.id">
            <div>MRP:{{ post.price }}</div>
            <div>Institute:{{ post.instname }}</div>
        </div>
      </div> -->

      <!-- <div v-for="post in postsdata" :key="post.id"> -->
        <div onload="getfinaldata()" class="cardalign">
          <div v-for="(imageUrl,index) in imageUrls" :key="index" class="card cardstyle" style="width:200px; height:220px">
            <img :src="imageUrl" class="card-img-top" style="width:auto; height:140px" />
                <div class="card-body" >
                    <h4 class="card-title">MRP:{{ postsdata[index].price }}₹</h4>
                    <h4 class="card-title">Institute:{{ postsdata[index].instname}}</h4>
                    <router-link to="/MonochromePainting" class="btn btn-primary bg-danger">Take a Look</router-link>
                </div>
              </div>
            <!-- </div>    -->
          </div>  

          <label for="institute">Select a Institute</label>
          <select id="institue" @change="onChange($event)" name="institute">
            <option>---- Select Institute ----</option>
            <option value="MET" >MET</option>
            <option value="KKW" >KKW</option>
            <option value="COEP">COEP</option>
            <option value="KVN">KVN</option>
          </select> 

          <!-- <ul v-if="value" style="list-style: none;">
            <li v-for="item in postsdata" :key="item.id">
              {{ }}
            </li>
          </ul> -->

          <ul>
            <li v-for="item in filteredItems" :key="item.id">
              {{ item.name }}
            </li>
          </ul>

          <!-- <li v-for="(file, index) in sortedFiles" :key="index">
            {{ file.name }}
          </li> -->
        </div>

</template>

<script>
import axios from 'axios'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';
// import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import {ref, getDownloadURL } from "firebase/storage";

export default {
  name: 'DashboardPage',
  components:
  {
    // InstituteImages
  },
  data() {
    return {
      imageUrls: [],
      users: [],
      institutename:'',
      postsdata:'',
      num:0,
      files: [],
      sortedFiles: [],
      storageRef : firebase.storage().ref().child('images'),
      onChange(e) {
              console.log(e.target.value);

          }
    }
  },
  methods:
  {
    // getfinaldata()
    // {
    //     const storage = firebase.storage();
    //     const storageRef = storage.ref('images');

    //   storageRef.listAll().then((result) => 
    //   {
    //     // const sortedFiles = result.items.sort((a, b) => {
    //     //     return a.name.localeCompare(b.name);
    //     //   });

    // // result.items.forEach((image) =>
    // result.items.forEach((image) =>
    // {
    //     image.getDownloadURL().then((url) => 
    //       {
    //           this.imageUrls.push(url);
    //       }); 
    //       const imageName = image.name;
    //       getDownloadURL(ref(storage, 'images/'+imageName))
    //       .then((url) => 
    //         {
    //                 // console.log(url);
    //                 this.items.push(url)
    //         })
    //       .catch(() => 
    //         {
    //           // Handle any errors
    //         });
    //         console.log(this.items);
    //     });
    // }) 
    // .catch((error) => 
    //   {
    //       // Handle errors that may occur
    //     console.error(error);
    //   });
      
    // },
    getPosts()
    {
      axios.get(`https://artgallery-2a2a0-default-rtdb.firebaseio.com/InstituteImages.json`)
      .then(response=>
      {
        console.log(response.data);
        this.formatPostData(response.data);
      });
    },
    formatPostData(posts)
    {
        
      for(let key in posts)
      {
        this.postsdata.push({...posts[key],id:key}); //destructuring via spread operator ...
      }
      console.log(this.postsdata);
    }
  },
  

  mounted() {
  this.getPosts()
  
 
  // Assuming your images are stored in a folder called 'images'
  this.storageRef.listAll().then((result) => {

    this.sortedFiles = result.items.sort((a, b) => b.timeCreated - a.timeCreated);

    this.sortedFiles.forEach((file) => {
      file.getDownloadURL().then((url) => {
        this.imageUrls.push(url);
        this.imageUrls.sort();
      });   
    });
  });
  
  
},
created() {
    const ref = firebase.database().ref('users');
    ref.on('child_added', (snapshot) => {
      this.users.push(snapshot.val());
    });
  },

}


      

</script>

<style>
.cardalign
{
  display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 30px;
    grid-gap: 80px;
}
label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

/* Style the select element */
select {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  appearance: none; /* Remove default appearance */
}

/* Style the options */
option {
  font-size: 16px;
  font-family: Arial, sans-serif;
}
</style>