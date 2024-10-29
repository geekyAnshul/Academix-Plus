// import { createSlice } from "@reduxjs/toolkit";

// const CategorySlice = createSlice({
//     name : 'category',
//     initialState : {
//         category : "All",
//     },
//     reducers : {
//         addCategory : (state,action)=>{
//             state.category = action.payload;
//         }
//     }
//  });

//  export const { addCategory }  = CategorySlice.actions;
//  export default CategorySlice.reducer;

// Importing createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Creating a slice for the category state
const CategorySlice = createSlice({
    // Name of the slice, which is 'category'
    name: 'category',

    // Initial state: The default category is set to "All"
    initialState: {
        category: "All", // This will store the currently selected category, starting with "All"
    },

    // Reducers: These define how the state can be updated
    reducers: {

        // Action to change the selected category
        addCategory: (state, action) => {
            // Update the 'category' value with the new category passed in the action's payload
            state.category = action.payload; // payload contains the new category (e.g., "Electronics", "Fashion", etc.)
        }
    }
});

// Exporting the addCategory action so it can be dispatched from components
export const { addCategory } = CategorySlice.actions;

// Exporting the reducer to be used in the Redux store
export default CategorySlice.reducer;
