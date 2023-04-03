import axios from "axios";
export const SET_PRODUCTS = (state,products)=>{
    state.products = products;
}

export const SET_PRODUCT = (state,product)=>{
    
    state.product = product;
}

export const ADD_TO_CART = (state,{product,quantity}) => {

    let productInCart = state.cart.find(item =>{
        // const jsonArray = JSON.stringify(state.cart);
        // localStorage.setItem('array', jsonArray);   
        return item.product.id === product.id;
        
    });

    if(productInCart)
    {
        productInCart.quantity += quantity;
        // const jsonArray = JSON.stringify(state.cart);
        // localStorage.setItem('array', jsonArray);
        return;
    }

    state.cart.push({
        product,
        quantity,
        
        
    })
    // const jsonArray = JSON.stringify(state.cart);
    // localStorage.setItem('array', jsonArray);
}

export const SET_CART = (state,cartItems)=>{
    // cartItems= JSON.parse(localStorage.getItem("array")) ;
    state.cart=cartItems;  
    
   
    
}

export const REMOVE_PRODUCT_FROM_CART = (state,product)=>{
    axios.delete(`https://retoolapi.dev/6ysODg/cart/${product}`)
    
    // state.cart = state.cart.filter(item=>{
    //     return item.product.id !== product.id;
    // })
    // const jsonArray = JSON.stringify(state.cart);
    // localStorage.setItem('array', jsonArray);
}

export const CLEAR_CART_ITEMS =(state)=>{
    state.cart=[]; //cart equals to empty (overwriting)
    // const jsonArray = JSON.stringify(state.cart);
    // localStorage.setItem('array', jsonArray);
}