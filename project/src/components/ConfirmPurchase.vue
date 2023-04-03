<template>
    <div>
      <HeaderFile1/>
        <div>
            <div class="row" v-for="item in displayCartItems" :key="item.id">
            <div class="col-8">
                <h1>{{ item.name }}</h1>
                <h3>{{ item.quantity }}x ₹{{ item.product }}</h3>
                <h2>Product Total :{{ item.quantity * item.price }}</h2>
                <br>
            </div>
            </div>
            <h1><span>Total:₹{{ cartTotalPrice }}</span></h1> <br>

        </div>

    <div>
        <div class="uploaddiv">
          <div class="container">
            <div class="imginput">
                <form>
                  <div class="getimg">
                    <img src="@/assets/UploadImg.png" alt="">
                  </div>
                  <div class="getInputs">
                    <label>Buyer Name</label>
                    <input type="text" v-model="name" id="name" placeholder="Buyer Name">
                    <br>
                    <label>Email</label>
                    <input type="email" v-model="email" id="email" placeholder="Enter your email">
                    <br>
                    <label>Phone</label>
                    <input type="number" v-model="phone" id="phone" placeholder="enter your contact">
                    <br>
                    <label>Address</label>
                    <input type="text" v-model="address" id="address" placeholder="Your Address">
                    <br>
                  </div>
                  <div class="submitbtn">
                    <button type="button" class="btn btn-warning" @click="sendEmail">Submit</button>
                  </div>
                </form>
            </div>
          </div>  
        </div>
    </div>
</div>

    <!-- <div>
    <h1>Send Email</h1>
    <form>
      <label for="to">To:</label>
      <input type="email" id="to" v-model="toEmail">
      <br><br>
      <label for="subject">Subject:</label>
      <input type="text" id="subject" v-model="subject">
      <br><br>
      <label for="body">Body:</label>
      <textarea id="body" v-model="body"></textarea>
      <br><br>
      <button type="button" @click="sendEmail">Send Email</button>
    </form>
  </div> -->
  <FooterFile/>
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
            
        },
        
    },
    components:
    {
      FooterFile,
      HeaderFile1
      
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
      axios.get(`https://retoolapi.dev/6ysODg/cart`)
          .then(response=>{
              
              this.displayCartItems=response.data;
              console.log(this.displayCartItems);
              return response.data;

          })
    },
}


</script>

<style>


</style>