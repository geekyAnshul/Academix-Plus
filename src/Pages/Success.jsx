import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'

const Success = () => {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },3000);  // Replace with actual API call delay or server response 
  },[])
  return (
    <div className='success flex flex-col justify-center items-center h-screen w-full'>
    {
      loading ? ( <PropagateLoader color='white'/>) :  (<div> <h1 className='text-3xl text-white font-semibold mb-1 text-center'>Order Successful!</h1>
      <h2 className='text-lg text-zinc-200 font-medium'>Your Order has been Successfully placed</h2> </div>)
    }

     
     
    </div>
  )
}

export default Success