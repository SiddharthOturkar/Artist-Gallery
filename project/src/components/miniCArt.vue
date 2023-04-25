<template>
    <div class="dropdown-menu p-2" style="min-width:320px; right: 0; left: 0; " aria-labelledby="triggerId">
        <div v-for="item in postsdata.slice(1)" :key="item.id">
            <div class="px-2 d-flex justify-content-between">
                <div>
                <strong>{{item.product}}</strong>
                <br>
                {{item.quantity}}x ₹{{ item.price }}
            </div>
            <div>
                <a href="#" class="badge badge-secondary" @click.prevent="removeProductFromCart(item.id)">remove</a>
            </div>
            </div>
        </div>
        <!-- <button class="dropdown-item" href="#">Action</button>
        <button class="dropdown-item disabled" href="#">Disabled Action</button> -->

        <hr>
        <div class="d-flex justify-content-between">
            <span>Total:₹{{ total }}</span>
            <!-- <a href="#" @click.prevent="clearCartItems()">Proceed to buy</a> -->
            <router-link to="/BuyPainting" class="proceed">Proceed to buy</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';
// import { response } from 'express';

export default {
    name: "miniCArt",
    data() {
        return {
            // cart1:JSON.parse(localStorage.getItem("array"))
            postsdata: [],
            displayCartItems: [],
            total: 0,
        };
    },
    computed: {
        cart() {
            // const jsonArray = JSON.stringify(this.$store.state.cart);
            // localStorage.setItem('array', jsonArray);
            // return localStorage.getItem('array');
            return this.$store.state.cart; //id& quantity
        },
        cartTotalPrice() {
            return this.$store.getters.cartTotalPrice;
        }
    },
    methods: {
        removeProductFromCart(product) {
            // this.$store.dispatch('removeProductFromCart',product)
            axios.delete(`https://retoolapi.dev/BYWiwS/cart/${product}`);
            return;
            // state.cart = state.cart.filter(item=>{
            // return item.product.id !== product.id;
            // })
        },
        clearCartItems() {
            this.$store.dispatch("clearCartItems");
        }
    },
    created() {
        // console.log(this.cart1);
        axios.get(`https://retoolapi.dev/BYWiwS/cart`)
            .then(response => {
            this.displayCartItems = response.data;
            this.postsdata = response.data;
            // console.log(this.postsdata);
            // return response.data;
            this.displayCartItems.forEach(item => {
                this.total += Number(item.price);
            });
            console.log(this.total);
            return this.total;
        });
    },
    components: { RouterLink }
}

</script>

<style scoped>
.proceed
{
    color: #fff;
}
</style>