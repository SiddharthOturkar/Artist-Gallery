<template>
    <div class="row">
       <div class="col-4">
            <img src="https://via.placeholder.com/150x100" class="w-100" alt="">
       </div>
       <div class="col-8">
            <h1>{{product.name}}</h1>
            <h3>₹{{product.price}}</h3>

            <input type="text" class="text-center col-1 mr-2 p-1">
            <button class="btn btn-primary" @click="addToCart()">Add to Cart</button>

            <p class="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, at?</p>
       </div>
    </div>  
</template>

<script>
export default
{
    props:['id'],
    computed:
    {
        product()
        {
            return this.$store.state.product
        }
    },
    
    created()   
    {
        this.$store.dispatch('getProduct',this.id)
    },
    methods:
    {
        addToCart()
        {
            this.$store.dispatch("addProductToCart",{
            product:this.product,
            quantity:1
        });
        }
    }
}
</script>

<style>

</style>