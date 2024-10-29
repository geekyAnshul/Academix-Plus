// import { createSlice } from "@reduxjs/toolkit";

// const CartSlice = createSlice({
//     name : 'cart',
//     initialState : {
//         cart : [],
//     },
//     reducers : {
//         addCart : (state,action)=>{
//             const existing = state.cart.find(item => item.id === action.payload.id);
//             if(existing){
//                 existing.qty += 1;
//                 return;
//             }
//            state.cart.push(action.payload);
//         },
//         removeCart: (state, action) => {
//             state.cart = state.cart.filter((item) => item.id !== action.payload.id);
//           },
//         incrementCart : (state, action) => {
//            state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item,qty : item.qty + 1 } : item)
//         },
//         decrementCart : (state, action) => {
//             state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item,qty : item.qty-1 } : item)
//          }
          
//     }
// });

// export const { addCart, removeCart,incrementCart,decrementCart } = CartSlice.actions;
// export default CartSlice.reducer;

// //--------------------------------------------------------------------------------------------------------------------------------
// Importing createSlice from Redux Toolkit to help manage cart-related state in a simpler way.
import { createSlice } from "@reduxjs/toolkit";

// Creating a slice for the cart with an initial state and reducers (actions)
const CartSlice = createSlice({
    name: 'cart', // Name of the slice, used to identify this part of the state in the Redux store.
    
    initialState: {
        cart: [], // Initial state: an empty array where cart items will be stored.
    },

    // Reducers define how the state is updated based on the action dispatched
    reducers: {

        // Action to add an item to the cart
        addCart: (state, action) => {
            // Check if the item already exists in the cart
            const existing = state.cart.find(item => item.id === action.payload.id);
            
            if (existing) {
                // If item exists, just increase its quantity
                existing.qty += 1;
                return; // Exit function after updating the quantity
            }
            
            // If the item doesn't exist, add it to the cart
            state.cart.push(action.payload);
        },

        // Action to remove an item from the cart
        removeCart: (state, action) => {
            // Filter out the item to be removed (keep items whose ID doesn't match the payload ID)
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },

        // Action to increment the quantity of an item in the cart
        incrementCart: (state, action) => {
            // Loop through the cart items and if the item matches the given ID, increase its quantity
            state.cart = state.cart.map((item) => 
                item.id === action.payload.id 
                    ? { ...item, qty: item.qty + 1 } // Create a new item object with updated quantity
                    : item // Return the original item if ID doesn't match
            );
        },

        // Action to decrement the quantity of an item in the cart
        decrementCart: (state, action) => {
            // Similar to incrementing, but here the quantity is decreased
            state.cart = state.cart.map((item) => 
                item.id === action.payload.id 
                    ? { ...item, qty: item.qty - 1 } // Create a new item object with decreased quantity
                    : item // Return the original item if ID doesn't match
            );
        }
    }
});

// Exporting the actions so that they can be dispatched from components
export const { addCart, removeCart, incrementCart, decrementCart } = CartSlice.actions;

// Exporting the reducer to be used in the Redux store
export default CartSlice.reducer;
