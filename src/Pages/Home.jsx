import React from 'react'
import Navbar from '../Components/Navbar'
import Category from '../Components/Category'
import Items from '../Components/Items'
import SideCart from '../Components/SideCart'



const Home = () => {
  return (
    <>
    <Navbar/>
    <Category/>
    <Items/>
    <SideCart/>
    </>
  )
}

export default Home