<template>

    <!-- Name:{{ image }}
    <AbstractPainting @changeUsername="userNameChange($event)"></AbstractPainting> -->
    <!-- <input v-model="userInput"> -->
    <!-- <h3>{{userInput | concat}}</h3> -->
    <!-- <section class="h-100 h-custom" style="background-color: #d2c9ff;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2" style="border-radius: 15px;">
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-lg-8">
                <div class="p-5">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                    <h6 class="mb-0 text-muted">{{value }}  items</h6>
                  </div>
                  <hr class="my-4">

                  <div class="row mb-4 d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="https://lobopopart.com.br/wp-content/uploads/2020/06/Arte-Abstrata.jpg"
                        class="img-fluid rounded-3" alt="Cotton T-shirt">
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <h6 class="text-muted">Painting</h6>
                      <h6 class="text-black mb-0">Abstract Painting</h6>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        class="form-control form-control-sm" v-model="value"/>

                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 class="mb-0">{{value | concat}}</h6>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="row mb-4 d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9InJ4pHGET-sMwSD9MfiTr28DmTEEEpPpA&usqp=CAU"
                        class="img-fluid rounded-3" alt="Cotton T-shirt">
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <h6 class="text-muted">Painting</h6>
                      <h6 class="text-black mb-0">Abstract Painting</h6>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        class="form-control form-control-sm" v-model="value"/>

                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 class="mb-0">{{value| concat}}</h6>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="row mb-4 d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="https://media.istockphoto.com/id/1134512518/photo/abstract-hand-painted-art-background-on-canvas.jpg?s=612x612&w=0&k=20&c=9q1y7CGMBGpoVzVKCIvRqQrE9FZu3F4VGfjIcUHgpvY="
                        class="img-fluid rounded-3" alt="Cotton T-shirt">
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <h6 class="text-muted">Painting</h6>
                      <h6 class="text-black mb-0">Abstract Painting</h6>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        class="form-control form-control-sm" v-model="value"/>

                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 class="mb-0">{{value | concat}}</h6>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="pt-5">
                    
                    <h6 class="mb-0"><router-link to="/GalleryArt" class="text-body" ><i
                          class="fas fa-long-arrow-alt-left me-2" ></i>Back to Shop</router-link></h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 bg-warning pricelist">
                <div class="p-5">
                  <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="text-uppercase">items</h5>
                    <h5>{{value}}</h5>
                  </div>

                  <h5 class="text-uppercase mb-3">Shipping</h5>

    

                  <h5 class="text-uppercase mb-3">Pin code</h5>

                  <div class="mb-5">
                    <div class="form-outline">
                      <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Examplea2">Enter your code</label>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Total price</h5>
                    <h5>{{userInput | concat}}</h5>
                  </div>

                  <button type="button" class="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark" @click="$router.push('/')">Pay Now</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> -->
<div>
  <HeaderFile1/>
    <div class="history_txt">
      Wow ! Confirm your Purchase
    </div>

    <!-- <div class="purchase">

      <div class="main_product">

        
          <div class="product_img">
            <img src="@/assets/art10.jpg" alt="">
          </div>
          <div class="product_details">
            <h3>Art by Siddharth Oturkar</h3><br>
            <h5>MET Institute</h5>
          </div>
          <div class="product_price">
            <h3>₹1500</h3>
          </div>
     
        
    </div>
    
    <div class="total_price_div">

      <div class="total_align">
        <div class="final_total">
          <h3>Total:</h3>
        </div>
        <div class="final_total">
          <h3>₹1500</h3>
        </div>
      </div>


      <div class="confirm_btn">
        <button>Confirm Purchase</button>
      </div>
    </div>
  </div> -->
<!-- ------------------------------------------------ -->
<div class="whole_card">
  
  <div class="main_for" >
    <div class="flex_div" v-for="item in displayCartItems.slice(1)" :key="item.id">
      <div class="product_img">
        <img src="@/assets/art10.jpg" alt="">
      </div>
      <div class="product_details">
        <h3>Art by {{item.product}}</h3><br>
        <h5>{{item.instname}}</h5> 
      </div>
      <div class="product_price">
        <h3>₹{{item.price}}</h3>
      </div>
    </div>
       
  </div>

  
  <div class="total_price_div">

    <div class="total_align">
      <div class="final_total">
        <h3>Total:</h3>
      </div>
      <div class="final_total">
        <h3>{{ total }}</h3>
      </div>
    </div>

    <div class="confirm_btn">
      <router-link to="/ConfirmPurchase"><button>Confirm Purchase</button></router-link>
    </div>

  </div>
</div>


<!-- ------------------------------------------------ -->
<!--     
    <div class="row" v-for="item in displayCartItems" :key="item.id">
      <div class="col-4">
        <img
          src="https://media.istockphoto.com/id/1201806395/vector/shopping-cart-line-icon-black-editable-stroke-trolley-basket-business-concept-shopping-cart.jpg?s=612x612&w=0&k=20&c=KmXx8oRPoNgNzwhxu3zCsacUF-HSVMtpvGEi3hBbe2w="
          alt="">
      </div>
      <div class="col-8">
        <h1>{{ item.product }}</h1>
        <h3>{{ item.quantity }}x ₹{{ item.price }}</h3>
        <h2>Product Total :{{ item.quantity * item.price }}</h2>
        <br>
        <a href="#" class="badge badge-secondary" @click.prevent="removeProductFromCart(item.id)">remove</a>


      </div>
    </div>
    <h1><span>Total:₹{{ cartTotalPrice }}</span></h1> <br>
    <h1><a href="#" @click.prevent="clearCartItems()">Clear Cart</a></h1>
    <h1><button><router-link to="/ConfirmPurchase">Proceed to Pay</router-link></button></h1> <br> -->


  
    <FooterFile />
  </div>
</template>

<script>
import HeaderFile1 from '@/components/HeaderFile1.vue';
import FooterFile from '@/components/FooterFile';
import axios from 'axios';
// import AbstractPainting from './AbstractPainting.vue';
export default
  {
    data() {
      return {
        value: '',
        displayCartItems:[],
        total : 0,
        // array1:JSON.parse(localStorage.getItem("array"))
      };
    },
    props: ['id'],
    components:
    {
      FooterFile,
      HeaderFile1
      
    },
    computed: {
      product() {
        return this.$store.state.product
      },
      cart() {
        return this.$store.state.cart;
      },
      cartTotalPrice() {
        return this.$store.getters.cartTotalPrice;
        // let total = 0;
    
        // this.displayCartItems.forEach(item =>{
        //     total += item.quantity * item.price 
        // })
        // return total;
      }
    },
    methods:
    {
      addToCart() {
        this.$store.dispatch("addProductToCart", {
          product: this.product,
          quantity: 1
        });
      },
      removeProductFromCart(product) {
        this.$store.dispatch('removeProductFromCart', product)
        // location.reload();
      },
      clearCartItems() {
        this.$store.dispatch("clearCartItems")
      }
    },
    created() {
      this.$store.dispatch('getProduct', this.id)
  
      // console.log(this.cart1);
      axios.get(`https://retoolapi.dev/BYWiwS/cart`)
          .then(response=>{
              
              // let total = 0;

              this.displayCartItems=response.data;
              console.log(this.displayCartItems);
              console.log('------------');
              this.displayCartItems.forEach(item =>{
                  this.total += Number(item.price);
              })
              console.log(this.total);
              return this.total;
              // return response.data;


          })
    },
    
  }

</script>

<style scoped>
.history_txt
{
    font-size:5rem;
}

/* ----------- Purchase Div Design -------------- */
.purchase
{
  /* border: 2px red dotted; */
  /* min-height: 100vh; */
  margin: 40px;
  border-radius: 20px;
  padding: 40px;
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.main_product
{
  display: flex;
  flex-direction: row;
  gap: 50px;
  border: 2px solid #ABC4AA;
  border-radius: 15px;
  padding: 20px;
  min-width: 600px;
}
.purchase .product_img
{
  /* border: 2px solid yellow; */
  height: 100px;
  width:150px;
  
}
.purchase .product_img img
{
  height: 100px;
  width:auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.product_details 
{
  /* border: 2px solid red; */
  padding-top: 20px;
  text-align: left;
  min-width: 400px;
}

 .product_price
{
  /* border: 2px solid red; */
  padding: 20px;
  text-align: left;
  min-width: 100px;
}
.product_details h3 , .product_price h3
{
  font-size: 22px;
  font-weight: bold;
}

.product_details h5
{
  font-size: 15px;
  font-weight: 300;
  margin-top: -20px;
}


/* ---------- Total Confirm Purchase Div ----------- */

.total_price_div
{
  border: 2px solid #ABC4AA;
  border-radius: 15px;
  max-width: 400px;
  margin-left: 100px;
  padding-top: 20px;
  /* padding-left: 40px; */
  
} 
.total_align
{
  display: flex;
  flex-direction: row;
  /* min-width: 100px; */
}
.final_total 
{
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: left;
  max-width: 300px;
}
.final_total h3 
{
  font-size: 22px;
  font-weight: bold;

}


/* ------------------------ */
.product_img
{
  /* border: 2px solid yellow; */
  height: 100px;
  width:150px;
  
}
.product_img img
{
  height: 100px;
  width:auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.product_details 
{
  /* border: 2px solid red; */
  padding-top: 20px;
  text-align: left;
  min-width: 400px;
}

 .product_price
{
  /* border: 2px solid red; */
  padding: 20px;
  text-align: left;
  min-width: 100px;
}
.product_details h3 , .product_price h3
{
  font-size: 22px;
  font-weight: bold;
}

.product_details h5
{
  font-size: 15px;
  font-weight: 300;
  margin-top: -20px;
}

.main_for
{
  border: 2px solid #ABC4AA;
  border-radius: 15px;
  max-width: 800px;
  padding: 20px;
  margin: 80px;


}
.flex_div
{
 
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-top: 40px;
  margin-bottom: 40px;
  /* margin: 80px; */
  /* padding: 20px; */
  /* max-width: 800px; */
}

.whole_card
{
  display: flex;
  flex-direction: row;
}

/* -------------total_price_div--------- */
.total_price_div
{
  max-height: 150px;
  margin-top: 100px;
}

.confirm_btn button
{

  background-color: #ABC4AA;
  border-radius: 20px;
  /* padding: 8px 100px 8px 100px; */
  border: none;
  font-size: 15px;
  font-weight: bold;
  color: #17232C;
  transition: 0.5s;
}

.confirm_btn button:hover
{

 transform: scale(1.1);
}

</style>