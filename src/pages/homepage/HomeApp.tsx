import React from 'react'
import Landing from './components/landing/Landing';
import Range from './components/range/Range';
import Products from './components/products/Products';
import Rooms from './components/rooms/Rooms';
import Gallery from './components/gallery/Gallery';


const HomeApp = () => {
  return (
    <>
    <Landing />
    <Range />
    <Products />
    <Rooms />
    <Gallery />
    </>
  )
}

export default HomeApp;