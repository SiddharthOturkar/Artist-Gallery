<template>
    <div class="card" >
      <div>
        <div class="imgBx">
          <img :src="product.url" alt="" id="myImage" srcset="">
        </div>
        <div class="content">
          <div class="details">
            <!-- <h2>₹{{product.price}}<br><span><router-link :to="{name:'ProductId', params:{id:product.id}}">{{product.name}}</router-link></span></h2> -->
            <h2>₹{{product.price}}<br><span>{{product.instname}}</span></h2>
            <div class="data">
              <h3>{{product.shape}}<br><span>Shape</span></h3>
              <h3>{{ product.size}}<br><span>Artist Name</span></h3>
              <h3>{{ product.size}}<br><span>Size</span></h3>
            </div>
            <div class="actionBtn">
              <router-link to="/BuyPainting" ><button @click="addToCart()">Buy Now</button></router-link>
              <button @click="addToCart()">Add to Cart</button>
            </div>
          </div>
        </div>
      </div> 
    </div>


</template>

<script>

export default{
  
    props:["product"],
    data() {
            return {
              postsdata:[],
              instname_value:'',
              current_val:false,
            }
        },
    methods:
    {
      async addToCart(){
        // const jsonArray = JSON.stringify(this.$store.state.cart);
        // axios.post(`https://retoolapi.dev/6ysODg/cart`)
        this.$store.dispatch("addProductToCart",{
          product:this.product,
          quantity:1
        })
        // localStorage.setItem('array', jsonArray);
      }
    },
    
};

</script>

<style scoped>
/* Card Styling starts from here */

.card
{
  /* border: 2px dotted red; */
  position: relative;
  width: 350px;
  height: 190px;
  /* height: 450px; */
  /* background-color: #fcf6bd; */
  background-color: #ABC4AA;
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
  /* background: #e6da96 ; */
  background: #17232c;
  /* color: #000000; */
  color: #fff;
  cursor: pointer;
}

.card .content .details .actionBtn button:nth-child(2)
{
  border: 1px solid #999;
  color: #999;
  background: #fff;
}

</style>