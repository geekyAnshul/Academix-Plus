// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import productData from '../Data/ProductData';
// import { useDispatch, useSelector } from 'react-redux';
// import { addCategory } from '../Redux/Store/CategorySlice';

// const Category = () => {
//    const [categories,setCategories] = useState([]);
//    const dispatch = useDispatch();
//    const selectedCategory = useSelector((state)=>state.category.category);

//    const listCategories = ()=>{
//     const uniquCategories = [
//       ...new Set(productData.map((product)=>product.category)),
//     ];
//     setCategories(uniquCategories); ["Primary Classes","ICSE 10th & 12th","JEE mains/Advance","NEET","Skill Development","GATE","UPSC Civil Services","SSC & Banking Exams"]
//     console.log(uniquCategories);
//    };

//    useEffect(()=>{
//     listCategories();
//    },[])
//   return (
//     <div className='pt-10 px-5'>
//         <h3 className='text-2xl text-zinc-600'>Discover the Best Study Materials</h3>
//         <div className='pt-6  flex gap-4'>
//         <button
//                 onClick={()=>dispatch(addCategory("All"))} className={`btn px-4 py-1  bg-zinc-100 rounded-md font-normal text-base ${selectedCategory=== "All" && " text-white bg-purple-700"  }`}>All</button>
           
//             {categories.map((category,index)=>{
             
//               return (
//                 <button
//                 key={index} 
//                 onClick={()=>dispatch(addCategory(category))} className={`btn px-4 py-1  bg-zinc-100 rounded-md font-normal text-base ${selectedCategory===category && " text-white bg-purple-700" }`}>{category}</button>
//               )
//             })}
            
//         </div>
//     </div>
//   )
// }

// export default Category
//_---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Importing necessary dependencies from React and Redux
import React, { useEffect } from 'react'; // React and useEffect hook to perform side effects
import { useState } from 'react'; // useState hook to manage local state
import productData from '../Data/ProductData'; // Importing product data from a local file
import { useDispatch, useSelector } from 'react-redux'; // Hooks to dispatch actions and access the Redux store's state
import { addCategory } from '../Redux/Store/CategorySlice'; // Importing the addCategory action to update the category state

// Defining the Category component
const Category = () => {
   // useState to store the list of unique categories locally
   const [categories, setCategories] = useState([]);

   // useDispatch hook to dispatch actions to the Redux store
   const dispatch = useDispatch();

   // useSelector hook to get the currently selected category from the Redux store
   const selectedCategory = useSelector((state) => state.category.category);

   // Function to list unique categories from the product data
   const listCategories = () => {
    // Using Set to extract unique categories from the product data
    const uniquCategories = [
      ...new Set(productData.map((product) => product.category)), // Maps through the product data and extracts the category from each product
    ];

    // Updating the categories state with the unique categories
    setCategories(uniquCategories);

    // For debugging: Logs the unique categories in the console
    console.log(uniquCategories); // Example categories: ["Primary Classes", "ICSE 10th & 12th", "JEE mains/Advance", etc.]
   };

   // useEffect hook to call listCategories once the component is mounted
   useEffect(() => {
    listCategories(); // Populates the categories on the initial render
   }, []); // Empty dependency array ensures this runs only once

   return (
    // Container div with padding using Tailwind CSS classes
    <div className='pt-10 px-5'>
        {/* Title of the category section */}
        <h3 className='text-2xl text-zinc-600'>Discover the Best Study Materials</h3>

        {/* Category buttons container */}
        <div className='pt-6 flex gap-4'>
          {/* 'All' button to select all categories */}
          <button
            // When clicked, dispatches the addCategory action with the "All" value
            onClick={() => dispatch(addCategory("All"))}
            
            // Button style changes if "All" is the selected category
            className={`btn px-4 py-1 bg-zinc-100 rounded-md font-normal text-base ${
              selectedCategory === "All" && "text-white bg-purple-600"
            }`}
          >
            All
          </button>

          {/* Rendering each unique category as a button */}
          {categories.map((category, index) => {
            return (
              <button
                key={index} // Unique key for each button
                // When clicked, dispatches the addCategory action with the selected category
                onClick={() => dispatch(addCategory(category))}

                // Button style changes if the current category is selected
                className={`btn px-4 py-1 bg-zinc-100 rounded-md font-normal text-base ${
                  selectedCategory === category && "text-white bg-purple-600"
                }`}
              >
                {category} {/* Displays the category name inside the button */}
              </button>
            );
          })}
        </div>
    </div>
  );
};

export default Category; // Exporting the Category component for use in other parts of the app
