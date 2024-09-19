import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItem: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            // console.log(action.payload);
            const products = action.payload;
            // while clicking a add to cart btn it check if it is already exist in the cart item if it exit it update the quantity of the product
            // or elese add the product to the with quantity 1
            const exisitingProduct = state.cartItem.find((product) => product.id === products.id)
            // console.log([...state.cartItem]);
            if(exisitingProduct){
                exisitingProduct.quantity++;
                console.log(exisitingProduct.quantity);
            }
            else{
                state.cartItem.push({...products,quantity:1})
            }
        },
        removeCart: (state, action) => {
            console.log(action.payload)
            state.cartItem = state.cartItem.filter(product => product.id !== action.payload)
            // remove the product based on the filter which the selected product is not equal it will return the product which is not equal
        },
        updateQuantity: (state,action) => {
            // it is to update the product quantity when ever i clicking a product i will get two items from product id and quantity this will find the product by id and update the quantity.
            const {id, quantity} = action.payload;
            const cartProduct = state.cartItem.find(product => product.id === id );
            if(cartProduct){
                cartProduct.quantity = quantity;
            }
        },
        clearCart:(state,action) => {
            // after placing the product it will the set the cart to empty
            state.cartItem = []
        }
    }
})

export const { addCart, removeCart, updateQuantity,clearCart } = cartSlice.actions;
export default cartSlice.reducer;