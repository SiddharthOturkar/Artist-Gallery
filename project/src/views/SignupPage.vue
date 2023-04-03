<template>
<div>
  <!-- <input type="email" id="email" v-model="email" name="email" class="form-control" />
                      <label class="form-label" for="email">Your Email</label> -->

                      <!--  <input type="password" id="password" v-model="password" name="password" class="form-control" />
                      <label class="form-label" for="password">Password</label> -->
                      <!-- <button type="button" @click="signUp" id="signUp" name="signup_sumbit" value="Sign up" class="btn btn-warning btn-lg">Sign Up</button> -->
    <HeaderFile1/>
    <!-- <section class="vh-100" style="background-color: #eee;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="username" name="username" class="form-control" />
                      <label class="form-label" for="username">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="email" v-model="email" name="email" class="form-control" />
                      <label class="form-label" for="email">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="password" v-model="password" name="password" class="form-control" />
                      <label class="form-label" for="password">Password</label>
                    </div>
                  </div>  

              

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" @click="signUp" id="signUp" name="signup_sumbit" value="Sign up" class="btn btn-warning btn-lg">Sign Up</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://png.pngtree.com/png-vector/20220821/ourmid/pngtree-indian-man-with-turban-rajasthani-men-welcome-namaste-greetings-png-image_6119228.png"
                  class="img-fluid" alt="Sample image">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> -->
<section class="vh-100">
    <div class="container-fluid h-custom ">
    <div class="row d-flex justify-content-center align-items-center h-100">
     
      
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 signupdiv">
        <div class="loginwelcome">
          <h1>Sign up</h1>
          <p class="small fw-bold mt-2 pt-1 mb-0"  style="color: #395F72;">Already have an account yet? <router-link to="/LoginPage"><a 
                style="color: #395F72;">Login</a></router-link></p>
        </div>
        
        <form class="mainform">
          <!-- Email input -->
          
                      
          <div class="form-outline mb-4 loginfields">
            <label class="form-label loginfields1" for="email">Your Email</label>
            <input type="email" id="email"  v-model="email" name="email" class="form-control" placeholder="Enter your email"/>
          </div>

          <!-- Password input -->
          
                      

          <div class="form-outline mb-3 loginfields">
            <label class="form-label loginfields2" for="password">Password</label>
            <input type="password" id="password" v-model="password" name="password" class="form-control" placeholder="Set Password"/>
          </div>

         

          <div class="text-center text-lg-start mt-4 pt-2 login_btn">
            <button type="button" @click="signUp" id="signUp" name="signup_sumbit" value="Sign up" class="btn btn-lg">Sign Up</button>
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
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="@/assets/logingsignup.png"
          class="img-fluid" alt="Sample image">
      </div>
    </div>
  </div>

</section>
<FooterFile/>
</div>

</template>

<script type="module">
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FooterFile from '@/components/FooterFile';
import HeaderFile1 from '@/components/HeaderFile1';
export default
{
  data()
  {
    return{
      email: '',
      password: ''
    }
  },
    components:
    {
        FooterFile,
        HeaderFile1
    },
    methods: {
        signUp: function() {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
            () => {
              this.$router.replace('Dashboard')
            },
            (err) => {
              alert('Oops. ' + err.message)
            }
          );
        }
      }
}
</script>

<style scoped>

.img-fluid
{
  margin-top: 21.5px;
  transform: scale(1.2);
  margin-left: 130px;
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
  margin-left: -145px;
  font-size: 20px;
  color: #395f72;
}

.loginfields2
{
  margin-left: -150px;
  font-size: 20px;
  color: #395f72;

}

#email ,#password
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
  margin-left: -275px;
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
.signupdiv
{
  /* border: 2px dotted red; */
  margin-left: -100px;
}
</style>