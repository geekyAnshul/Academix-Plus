import React from 'react'
import Card from './Card'
import productData from '../Data/ProductData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Items = () => {
  // const handleToast = (name)=> toast.success(`${name} Added to Cart`);
  const category = useSelector((state)=>state.category.category)
  const search = useSelector((state)=>state.search.search)
  const handleToast = (name) => toast.success(`${name} successfully added`, {
    style: {
      background: 'white',
      color: 'purple', // Ensure text is readable on the gradient
      fontWeight:"500",
    }
  });
  
  
  
  return (
    <>
    <Toaster position='top-center' reverseOrder='false'/>
    <div className='mt-10 p-5 flex gap-12 flex-wrap'>
        {productData.filter((product)=>{
           if(category === "All"){
            return product.name.toLowerCase().includes(search.toLowerCase());
           }else{
              return category === product.category &&
              product.name.toLowerCase().includes(search.toLowerCase());
           }
        }).map((product)=>(
          <Card key={product.id} id={product.id} name={product.name} handleToast={handleToast} qty={product.qty} price={product.price} img={product.img} desc={product.desc} category={product.category} liked={product.liked} />
        ))}

        {/* {productData.map((product)=>{
            return( 
            <Card key={product.id} id={product.id} name={product.name} handleToast={handleToast} qty={product.qty} price={product.price} img={product.img} desc={product.desc} category={product.category} liked={product.liked} />
            )
        })} */}
    
    </div>
    </>
  )
}

export default Items