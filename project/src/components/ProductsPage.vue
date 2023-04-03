<!-- <template>
    <div>
      <h1 class="title">All Products</h1>
        <p>{{length}} products</p>
        <table class="table is-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" track-by="id">
              <td>{{product.name}}</td>
              <td>{{product.description}}</td>
              <td>${{product.price}}</td>
              <td><button @click='addToCart(product)' class='button is-info'>Add to cart</button></td>
            </tr>
          </tbody>
      </table>
    </div>
  </template>
  <script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'app',
    computed: mapGetters({
      products: 'allProducts',
      length: 'getNumberOfProducts'
    }),
    methods: mapActions([
      'addToCart'
    ])
  }
  </script> -->


  <!-- <template>
    <div>
      <ul class="product-listing">
        <li v-for="product in saleproducts" :key="product">
          {{ product.name }} | {{ product.price }} | {{ product.id }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  // import { mapGetters } from 'vuex';
  // import TrialPage from './TrialPage.vue'
  // import CartPage from './CartPage.vue'

// import { mapActions } from 'vuex';

  
  export default { 
    name:'ProductsPage',
    components: {
      // TrialPage,
      // CartPage
    },
    // computed: mapGetters(["allProducts"]),
    // computed:mapGetters(["allProducts"]),
    // {
      computed:
      {
      products()
      {
        return this.$store.state.products;
      },
      saleproducts()
      {
        return this.$store.getters.saleproducts
      },
    },
    // },
    methods:
    {
      reducedPrice:function()
      {
        this.$store.commit('reducePrice')
      },
      // ...mapActions(["getProducts"])
    },
    created()
    {
      this.getProducts(),
      this.$store.commit('setProducts')
    }
    
  }
  </script>
   -->

   <!-- <template>
    <div>
      <h1 class="title">All Products</h1>
        <p>{{length}} products</p>
        <table class="table is-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" track-by="id">
              <td>{{product.name}}</td>
              <td>{{product.description}}</td>
              <td>${{product.price}}</td>
              <td><button @click='addToCart(product)' class='button is-info'>Add to cart</button></td>
            </tr>
          </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'app',
    computed: mapGetters({
      products: 'allProducts',
      length: 'getNumberOfProducts'
    }),
    methods: mapActions([
      'addToCart'
    ])
  }
  </script>
  
  <style lang="scss">
  </style> -->

<!-- 
  <template>
    <div>
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </template>
  
  <script>
  export default {
    name:'ProductPage',
    props: ['product'],
    methods: {
      addToCart() {
        this.$store.commit('addToCart', this.product);
      }
    }
  }
  </script> -->
  

  <template>
    <div >
      <HeaderFile1/>
      <div class="history_txt">
          Arts from Institutes
      </div>
      <div class="bigcard" > 
        <ProductCard v-for="product in products" :key="product.id" :product="product" class="childClass"/>
      </div>
      <FooterFile />
    </div>
   
  </template>

  <script>
  import HeaderFile1 from '@/components/HeaderFile1.vue';
  import FooterFile from '@/components/FooterFile';
  import ProductCard from './ProductCard.vue'
  export default
  {
    components:
    {
      ProductCard,
      FooterFile,
      HeaderFile1
    },
    computed:{
      products(){
        return this.$store.state.products;
      }
    },  
    created()
    {
      this.$store.dispatch('getProducts');
    }
  }
  
  </script>

  <style scoped>
.bigcard
{
  /* border: 2px dotted red; */
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Kanit', sans-serif;
  
}
.bigcard>* {
        flex: 1 1 1;
    }
.history_txt
{
    font-size:5rem;
/* text-decoration: 1px solid underline; */
/* padding-top: 10px; */

}

</style>