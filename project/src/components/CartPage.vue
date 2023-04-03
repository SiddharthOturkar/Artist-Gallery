<!-- <template>
    <div class="cart">
      <h1 class="title">Your Cart</h1>
      <p v-show="!products.length">
        <i>Your cart is empty!</i>
        <router-link to="/">Go shopping</router-link>
      </p>
      <table class="table is-striped" v-show="products.length">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in products">
              <td>{{ p.name }}</td>
              <td>${{ p.price }}</td>
              <td>{{ p.quantity }}</td>
            </tr>
            <tr>
              <td><b>Total:</b></td>
              <td></td>
              <td><b>${{ total }}</b></td>
            </tr>
        </tbody>
  </table>
      <p><button v-show="products.length" class='button is-primary' @click='checkout'>Checkout</button></p>
    </div>
  </template>
  <script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        products: 'cartProducts'
      }),
      total () {
        return this.products.reduce((total, p) => {
          return total + p.price * p.quantity
        }, 0)
      }
    },
    methods: {
      checkout(){
        alert('Pay us $' + this.total)
      }
    }
  }
  </script> -->


  <!-- Display Cart -->
  

  <!-- <template>
    <div>
      <h2>Cart</h2>
      <ul>
        <li v-for="product in cart" :key="product.id">{{ product.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cart() {
        return this.$store.state.cart
      }
    }
  }
  </script> -->
  
<!-- 
  <template>
    <div class="cart">
      <h1 class="title">Your Cart</h1>
      <p v-show="!products.length">
        <i>Your cart is empty!</i>
        <router-link to="/">Go shopping</router-link>
      </p>
      <table class="table is-striped" v-show="products.length">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in products">
              <td>{{ p.name }}</td>
              <td>${{ p.price }}</td>
              <td>{{ p.quantity }}</td>
            </tr>
            <tr>
              <td><b>Total:</b></td>
              <td></td>
              <td><b>${{ total }}</b></td>
            </tr>
        </tbody>
  
      </table>
      <p><button v-show="products.length" class='button is-primary' @click='checkout'>Checkout</button></p>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        products: 'cartProducts'
      }),
      total () {
        return this.products.reduce((total, p) => {
          return total + p.price * p.quantity
        }, 0)
      }
    },
    methods: {
      checkout(){
        alert('Pay us $' + this.total)
      }
    }
  }
  </script> -->

  <template>
    <div>
      <h1>Cart</h1>
      <ul>
        <li v-for="product in cartItems" :key="product.id">{{ product.name }} - {{ product.price }}</li>
      </ul>
      <p>Total: {{ cartTotal }}</p>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['cartItems', 'cartTotal'])
    }
  }
  </script>
  