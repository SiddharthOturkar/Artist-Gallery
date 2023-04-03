import axios from 'axios'
// import firebase from 'firebase/compat';
// import products from './modules/products';
// import products from './modules/products';
// import { postsModule } from './postsModule';

export const getProducts = ({commit}) => {
    console.log('response.data');
    axios.get(`https://retoolapi.dev/gdK6q2/data`)
    .then(response =>{
        commit('SET_PRODUCTS',response.data);
        console.log(response.data);
    })
} 

export const getProduct = ({commit},ProductId) => {
    axios.get(`https://retoolapi.dev/gdK6q2/data${ProductId}`)
    .then(response=>{
        // this.formatPostData(response.data);
            commit('SET_PRODUCT',response.data);
        // commit('SET_PRODUCT',Object.keys(response.data) )
    })

}


export const addProductToCart = ({commit},{product,quantity})=>{
    
    commit('ADD_TO_CART',{product,quantity});
  
    axios.post(`https://retoolapi.dev/6ysODg/cart`,{
        id: product.id,
        price: product.price,
        product: product.name,
        quantity: 1

    })
}

export const getCartItems = ({commit})=>{
    
    // commit('SET_CART')
    axios.get(`https://retoolapi.dev/jI9C2n/cart`)
    .then(response=>{
        commit('SET_CART',response.data)
    })

} 

export const removeProductFromCart = ({commit},product)=>{
    commit('REMOVE_PRODUCT_FROM_CART',product);
    
    

    // axios.delete(`https://retoolapi.dev/jI9C2n/cart/${product.id}`)
}

export const clearCartItems = ({commit})=>{
    commit('CLEAR_CART_ITEMS');
    // axios.delete(`https://retoolapi.dev/6ysODg/cart`)
}