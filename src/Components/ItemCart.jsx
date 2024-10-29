import React from 'react'
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeCart } from '../Redux/Store/CartSlice';
import { incrementCart } from '../Redux/Store/CartSlice';
import { decrementCart } from '../Redux/Store/CartSlice';
import toast, { Toaster } from 'react-hot-toast';

const ItemCart = ({id,name,img,price,qty}) => {
    const dispatch = useDispatch();
  return (
    <>
    <div className='px-2 mx-1 flex mt-3 bg-white py-2 shadow-md shadow-gray-600 rounded-md'>
    
        <img className='w-[70px] h-[70px] object-contain transition-all duration-300 cursor-pointer hover:scale-110' src={img} alt="pic" />
        
         <div className='mt-2'>
            <div className='flex justify-between items-center '>
            <h1 className='font-semibold '>{name}</h1>
            <MdDelete onClick={() => {
            dispatch(removeCart({ id, img, name, price, qty }));
            toast.error(`${name} removed`,{
             icon: "👋",
              style: {
                background: 'white',
                color: 'purple', // Ensure text is readable on the gradient
                fontWeight:"500",
              }
            })
        }}
 className='absolute right-7 text-xl text-zinc-600 hover:text-black cursor-pointer'/>
            </div>

        <div className='flex justify-between items-center gap-6'>
                <h1 className='text-purple-800 font-medium'> ₹{price}</h1>

            <div className='flex items-center gap-2'>
            <AiOutlineMinusSquare onClick={()=>qty>1 ? dispatch(decrementCart({id})) : (qty=0)} className=' border-2 overflow-hidden transition-all duration-500 cursor-pointer border-zinc-600 text-zinc-600 hover:text-white hover:bg-purple-800 hover:border-none rounded-md p-1   text-xl hover:text-2xl'/>
            <span>{qty}</span>
            <AiOutlinePlusSquare onClick={()=>dispatch(incrementCart({id}))} className=' border-2 overflow-hidden transition-all duration-500 cursor-pointer border-zinc-600 text-zinc-600 hover:text-white hover:bg-purple-800 hover:border-none rounded-md p-1  text-xl hover:text-2xl' />
            </div>
        </div>
         </div>
    </div>
    </>

    
  )
}

export default ItemCart