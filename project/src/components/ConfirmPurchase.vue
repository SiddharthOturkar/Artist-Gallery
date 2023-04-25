<template>
    <div>
      <HeaderFile1/>
        <!-- <div>
            <div class="row" v-for="item in displayCartItems" :key="item.id">
            <div class="col-8">
                <h1>{{ item.name }}</h1>
                <h3>{{ item.quantity }}x ₹{{ item.product }}</h3>
                <h2>Product Total :{{ item.quantity * item.price }}</h2>
                <br>
            </div>
            </div>
            <h1><span>Total:₹{{ cartTotalPrice }}</span></h1> <br>

        </div> -->

    <div class="submit_details">
      <div class="submit_image">
        <img src="@/assets/History_img.png" alt="" srcset="">
      </div>
        <div class="uploaddiv">
          <div class="container">
            <div class="imginput">
                <form>
                  <!-- <div class="getimg">
                    <img src="@/assets/UploadImg.png" alt="">
                  </div> -->
                  <h1>Complete Purchase !</h1>
                  <div class="getInputs">
                    <label>Buyer Name</label><br>
                    <input type="text" v-model="name" id="name" placeholder="Buyer Name">
                    <br>
                    <label>Email</label><br>
                    <input type="email" v-model="email" id="email" placeholder="Enter your email">
                    <br>
                    <label>Phone</label><br>
                    <input type="number" v-model="phone" id="phone" placeholder="enter your contact">
                    <br>
                    <label>Address</label><br>
                    <input type="text" v-model="address" id="address" placeholder="Your Address">
                    <br>
                  </div>
                  <div class="submitbtn">
                    <button type="button" class="btn btn-warning" @click="sendEmail">Confirm Booking</button>
                  </div>
                </form>
            </div>
          </div>  
        </div>
    </div>
    <FooterFile/>
</div>

 
 
</template>

<script src="https://smtpjs.com/v3/smtp.js"></script>
<script>
import HeaderFile1 from '@/components/HeaderFile1.vue';
import FooterFile from '@/components/FooterFile';
import axios from 'axios'

export default{
    data(){
        return{
            name:'',
            email:'',
            phone:'',
            address:'',
            product_name:'',
            total_amount:0  ,
            displayCartItems:[]
            // toEmail: '',
            // subject: '',
            // body: ''
        }
      },
      components: {
        HeaderFile1,
        FooterFile
      },
    methods:
    {
        // confirmPurchase()
        // {

        // },
        sendEmail() {
            this.total_amount=this.$store.getters.cartTotalPrice;
            this.product_name=this.$store.state.cart;
              Email.send({
                  Host: 'smtp.elasticemail.com',
                  Username: 'siddharth29otr@gmail.com',
                  Password: 'E78ABC4D8E06267E24E4C4513C629116B6C1',
                  // To: this.toEmail,
                  To: this.email,
                  From: 'siddharth29otr@gmail.com',
                  Subject:'Order Details ! Thank You for Shopping',
                  Body: 'Name: '+this.name+'<br>Email: '+this.email+'<br>Phone: '+this.phone+'<br>Address: '+this.address+'<br>Total Amount: '+this.total_amount+'<br><table border="1px"><tr><th>'+'Name'+'</th><th>'+'Email'+'</th><th>'+'Phone'+'</th></tr><tr><td>'+this.name+'</td><td>'+this.email+'</td><td>'+this.phone+'</td></tr></table>'
              }).then(message => {
                  if(message=='OK'){
                          alert("Email Send");
                          this.$router.push('/');
                          // axios.get(`https://retoolapi.dev/BYWiwS/cart`)
                          // .then(response=>{
                              
                          //     response.data= response.data.splice(1,response.data.length)

                          // })  

                      }
                      else
                      {
                          console.error(message);
                          alert("Email Not Sent");
                      }
                  // alert('Email sent successfully!');
              });
             
        }
    },
    computed:
    {
        cart() {
        return this.$store.state.cart;
      },
      cartTotalPrice() {
        // return this.$store.getters.cartTotalPrice;
        let total = 0;
    
        this.displayCartItems.forEach(item =>{
            total += item.quantity * item.price 
        })
        console.log(total);
        return total;
      },
       product() {
        return this.$store.state.product
      },
    },
    mounted() {
      // this.$store.dispatch('getProduct', this.id)
  
      // console.log(this.cart1);
      axios.get(`https://retoolapi.dev/BYWiwS/cart`)
          .then(response=>{
              
              this.displayCartItems=response.data;
              console.log(this.displayCartItems);
              return response.data;

          })
    },
}


</script>

<style scoped>
.submit_details
{
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* border: 2px solid red; */
}


.submit_image img
{
  height: 600px;
}

.uploaddiv .container
{
  margin: 50px;
  width: 500px;
}
.uploaddiv .container .imginput
{
  margin: 50px;
  
}
.imginput h1
{
  /* border:2px green dotted; */
  font-size: 30px;
  color: #395f72;
  text-align: start;
  font-weight: bold;
  margin-top: -30px;
}

.getInputs
{
  margin-top: 40px;
  /* border: 2px brown dotted; */
  /* justify-content: start;
  align-items: start; */
}
.getInputs label
{
  /* border: 2px red dotted; */
  font-size: 20px;
  color: #395f72;
  text-align: start;
  padding: 2px;
  margin-bottom: 1px;
  width: 100%; 
  text-align: left; 
  
}
.getInputs input
{
  background-color: rgb(251, 248, 240);
  box-shadow: none;
  border-radius: 10px;
  border:2px solid #395f72;
  color: #395f72;
  font-size: 20px;
  width: 300px;
  padding: 2px;
  margin-bottom: 15px;
  margin-left: -85px;
}
::placeholder
{
  color: #395f72;
  font-size: 15px;
}

.submitbtn button
{
  margin-top: 20px;
    margin-left: -252px;
    background-color: #395f72;
    color: #fff;
    font-size: 15px;
    border: none;
    padding: 6px;
    transition: 0.5s;
}
.submitbtn button:hover
{
  transform: scale(1.1);
}
</style>