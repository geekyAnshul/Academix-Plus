// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { setSearch } from '../Redux/Store/SearchSlice'


// const Navbar = () => {
//   const dispatch = useDispatch()
//   return (
//     <nav className='nav w-full z-50 mb-10 flex justify-between py-3 px-5 bg-blue-50'>
//         <div >
//            <h3 className='text-lg text-zinc-400 font-medium'>{new Date().toUTCString().slice(0,16)}</h3>
//            <h1 className='name text-2xl font-semibold'>Academix Plus</h1>
//         </div>
//         <div className='mt-4'>
//             <input onChange={(e)=>dispatch(setSearch(e.target.value))} className='px-4 py-[5px] border-2 outline-none  text-zinc-700 capitalize rounded-[5px] font-medium w-[400px]' type="text" id='search' placeholder='Search' autoComplete='off' />
//         </div>
        
//     </nav>
//   )
// }

// export default Navbar

//_____________________________________________________________________________________________________________________________________________

// Importing necessary dependencies from React and Redux
import React from 'react'; // React to create the functional component
import { useDispatch } from 'react-redux'; // useDispatch is a hook to dispatch actions
import { setSearch } from '../Redux/Store/SearchSlice'; // Importing the action 'setSearch' from the SearchSlice to update the search state

// Defining the Navbar component
const Navbar = () => {
  // useDispatch hook allows us to dispatch Redux actions
  const dispatch = useDispatch(); 

  return (
    // JSX for the navigation bar
    <nav className='nav w-full z-50 mb-10 flex justify-between py-3 px-5 bg-blue-50'>
      {/* Left section of the navbar */}
      <div>
        {/* Displaying the current date in a formatted string */}
        <h3 className='text-lg text-zinc-200 font-medium'>
          {new Date().toUTCString().slice(0, 16)} 
          {/* Creates a new Date object and converts it to UTC string, then extracts only the date part (first 16 characters) */}
        </h3>
        
        {/* Site title */}
        <h1 className='name text-2xl font-semibold'>Academix Plus</h1>
      </div>

      {/* Right section of the navbar containing the search input */}
      <div className='mt-4'>
        {/* Input field for search with an event handler */}
        <input 
          // onChange event triggers whenever the user types in the input field
          onChange={(e) => dispatch(setSearch(e.target.value))} 
          // Dispatching the 'setSearch' action with the current input value (e.target.value)
          
          className='px-4 py-[5px] border-2 outline-none text-zinc-700 capitalize rounded-[5px] font-medium w-[400px]' 
          // Tailwind CSS classes are used for styling the input field

          type="text" 
          id='search' 
          placeholder='Search' 
          autoComplete='off' // Prevents the browser from auto-filling the input field with previous search terms
        />
      </div>
    </nav>
  );
};

export default Navbar; // Exporting the Navbar component for use in other parts of the app
