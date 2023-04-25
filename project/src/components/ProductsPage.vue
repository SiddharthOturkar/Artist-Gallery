
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