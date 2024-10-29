import React, { useState } from 'react'
import { IoCloseCircle } from "react-icons/io5";
import ItemCart from './ItemCart';
import { useSelector } from 'react-redux';
import { HiShoppingCart } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

const SideCart = () => {
    const [active ,setActive] = useState(false);
    const cartItems = useSelector(state => state.cart.cart);
    const navigate = useNavigate();

    // const totalQty = cartItems.reduce((totalQty,item)=> totalQty+item.qty,0);
    // const totalprice = cartItems.reduce((totalprice,item)=> totalprice+item.price,0);
    const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

// Calculate total price considering both item price and quantity
    const totalprice = cartItems.reduce((totalprice, item) => totalprice + (item.price * item.qty), 0);

  return (
    <> 
     <div className={`h-full w-[20vw] bg-white shadow-md z-50 shadow-black rounded-sm fixed transition-all duration-500 top-0 right-0 ${active ? "translate-x-0" : "translate-x-full"}`}>
         <div className='font-semibold text-black flex justify-between px-2 py-3'>
            <span className='text-zinc-700 text-2xl'>My Orders</span>
            <IoCloseCircle onClick={()=>setActive(!active)} className="cross text-3xl cursor-pointer "/>
         </div>
         {cartItems.length > 0  ? cartItems.map((food)=>{
              return ( 
                <ItemCart key={food.name} id={food.id} name={food.name} price={food.price} qty={food.qty}  img={food.img}/>
              )
         }): <h1 className='text-2xl text-zinc-500 font-semibold ml-12 mt-8'>Your cart is empty</h1>} 
         
        <div className='font-semibold text-black absolute bottom-0 w-full px-2 py-5'>
            <h1 className='text-zinc-700 text-2xl mb-1'>Items : {totalQty}</h1>
            <h2 className='text-zinc-700 text-2xl mb-1'>Total Amounts :₹{totalprice} </h2>
            <button onClick={()=>navigate("/success")} className='butn px-5 py-2 w-[99%] mt-2 text-lg shadow-sm shadow-gray-300 hover:text-xl hover:shadow-lg hover:shadow-gray-300'>CheckOut</button>
        </div>
     </div> 
     <HiShoppingCart onClick={()=>setActive(true)} className={`butni rounded-full p-3 fixed bottom-5 right-3 text-5xl transition-all duration-300  hover:scale-110 cursor-pointer ${totalQty > 0 && "transition-all duration-500 animate-bounce"} `}/>
    </>
  )
}

export default SideCart