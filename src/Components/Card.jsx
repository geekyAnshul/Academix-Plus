import React from 'react'
import { BiSolidLike } from "react-icons/bi";
import { addCart } from '../Redux/Store/CartSlice';
import { useDispatch } from 'react-redux';

const Card = ({id,img,name,desc,price,category,liked,handleToast}) => {
  const dispatch = useDispatch();
  return (
    
        <div className='card w-[250px]  py-5  flex justify-between items-center text-center flex-col  rounded-md'>
        <img className='w-[210px] h-[180px] object-contain transition-all duration-500 ease-in-out hover:scale-110 cursor-grab ' src={img} alt="" />
        <div className='flex justify-between gap-10 mt-3'>
            <h1 className='text-zinc-950 font-semibold text-center leading-4'>{name}</h1>
            <span className='text-purple-800 font-medium'> ₹{price}</span>
        </div>

        <p className='px-5 text-pretty mt-1 leading-4 tracking-normal text-sm text-zinc-600'>{desc}</p>

        <div className='flex justify-between items-center gap-10 mt-4'>
           <span className=' flex items-center gap-1'>
            <BiSolidLike className="text-purple-800 text-xl"/>{liked}
            </span> 
            <button onClick={()=>{dispatch(addCart({id,img,name,price,category,qty:1})
          )
          handleToast(name);
        }
         
          } className='butn px-2 py-1 bg-zinc-300'>Add to Cart</button>
        </div>
    </div>
    
  )
}

export default Card