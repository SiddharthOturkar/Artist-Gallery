<template>
    <main style="display: flex">
  
      <div class="be-a-member">
    
  
        <form @submit.prevent="submitForm" method="post">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" v-model="name" required />
          </div>
  
          <div class="form-group">
            <label for="age">Email</label>
            <input type="text" id="age" name="age" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="friend">Phone</label>
            <input type="number" id="friend" name="friend" v-model="phone" />
          </div>
          <div class="form-group">
            <label for="views">Address</label>
            <textarea id="views" name="views" v-model="address" required></textarea>
          </div>
          <div style="color: green; text-align: center" v-if="successMessage">
            {{ successMessage }}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  </template>
    
    
    <script>
  import axios from "axios";

  export default {
    components: {
    //   MemberCounter,
    },
    data() {
      return {
        name: "",
        email: "",
        phone: "",
        address: "",
      };
    },
    methods: {
      async submitForm() {
        const formData = {
          name: this.name,
          email: this.email,
          address: this.address,
          phone: this.phone,
        };
  
        try {
          const res = await axios.post(
            "http://localhost:3000/api/form-data",
            formData
          );
          console.log(res);
  
          // Clear form fields
          this.name = "";
          this.email = "";
          this.phone = "";
          this.address = "";
  
          // Show success message
          this.successMessage = "Form submitted successfully!";
        } catch (e) {
          console.log(e);
        }
      },
    },
  };
  </script>
  <style scoped>
  .be-a-member {
   width:600px;
    margin-right: 20%;
    margin-left: 2%;
    padding: 1rem;
    background-color: #ffffff00;
    border-radius: 5px;
    margin-top: 5%;
  }
  
  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="number"],
  textarea {
    padding: 0.5rem;
    border: none;
    border-bottom: 2px solid #ccc;
    font-size: 1rem;
  }
  
  input[type="text"]:focus,
  input[type="email"]:focus,
  input[type="number"]:focus,
  textarea:focus {
    border-bottom-color: #1abc9c;
  }
  
  button[type="submit"] {
    background-color: #1abc9c;
    color: #fff;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.2s;
  }
  
  button[type="submit"]:hover {
    background-color: #16a085;
  }
  </style>