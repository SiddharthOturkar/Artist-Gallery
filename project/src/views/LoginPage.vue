<template>
<div>
 
    <HeaderFile1/>
    <section class="vh-100">
    <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="@/assets/logingsignup.png"
          class="img-fluid" alt="Sample image">
      </div>
      
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <div class="loginwelcome">
          <h1>Login</h1>
          <p class="small fw-bold mt-2 pt-1 mb-0"  style="color: #395F72;">Doesn't have an account yet? <router-link to="/SignUp"><a href="#!"
                style="color: #395F72;">Sign up</a></router-link></p>
        </div>
        
        <form class="mainform">
          <!-- Email input -->
          <div class="form-outline mb-4 loginfields">
            <label class="form-label loginfields1" for="form3Example3">Email address</label>
            <input type="email" id="form3Example3" v-model="email" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3 loginfields">
            <label class="form-label loginfields2" for="form3Example4">Password</label>
            <input type="password" id="form3Example4" v-model="password" class="form-control form-control-lg"
              placeholder="Enter password" />
          </div>

         

          <div class="text-center text-lg-start mt-4 pt-2 login_btn">
            <button type="button" @click="login" class="btn  btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
          </div>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <!-- <p class="lead fw-normal mb-0 me-3 login">Log in with</p> -->
            <div class="googlebtn">
              <hr>
              <img src="@/assets/GoogleSign.png" class="google" alt="">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

</section>
<FooterFile/>
</div>

</template>

<script>
import HeaderFile1 from '@/components/HeaderFile1.vue';
import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';
import FooterFile from '@/components/FooterFile';
// import HeaderFile from '@/components/HeaderFile';
export default
{
    components:
    {
        FooterFile,
        // HeaderFile
        HeaderFile1
    },
    data()
    {
        return{
           userInput:'',
           email: '',
           password: ''
        }
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          () => {
            this.$router.replace('Dashboard');
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    },
}

// let a = document.getElementById('this.loginbtn');
// a.style.color='red'
</script>

<style scoped>
.vh-100
{
    font-size: 15px;
}
.img-fluid
{
  margin-top: 21.5px;
  transform: scale(1.2);
  margin-left: -50px;
}
.google
{
  height: 100px;
  width: 250px;

}


.googlebtn hr
{
  border-bottom: 1px solid #395f72;
  width: 180%;
  margin-top: -10px;
}
.googlebtn img
{
   margin-top: -20px;
   margin-left: -30px;
   transition: 0.5s;
   cursor: pointer;;
}
.googlebtn img:hover
{
  transform: scale(1.1);
}
.loginfields1
{
  margin-left: -130px;
  font-size: 20px;
  color: #395f72;
}

.loginfields2
{
  margin-left: -150px;
  font-size: 20px;
  color: #395f72;

}

#form3Example3 ,#form3Example4
{
  background-color: rgb(251, 248, 240);
  box-shadow: none;
  border-radius: 10px;
  border:2px solid #395f72;
  color: #395f72;
  font-size: 20px;
  /* padding: 10px; */
}
::placeholder
{
  color: #395f72;
  font-size: 15px;
  
}
.loginwelcome h1
{
  color: #395f72;
  font-size: 30px;
  font-weight: bold;
  margin-left: -310px;
}

.loginwelcome p
{
  color: #395f72;
  font-size: 15px;
  font-weight: bold;
  margin-left: -130px;
}

/* ------------- main form design -------------------- */
.mainform
{
  /* border: 2px solid red; */
  margin-top: 30px;
}

.login_btn button
{
    margin-top: 20px;
    margin-left: -30px;
    background-color: #395f72;
    color: #fff;
    font-size: 15px;
}

.login_btn button:hover
{
  background-color:#abc4aa ;
  color: #395f72;
  font-weight: bolder;
}
</style>