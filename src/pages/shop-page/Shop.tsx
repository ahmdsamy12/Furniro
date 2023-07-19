import React from 'react'
import MainHead from '../../components/mainHeadPage/MainHead';
import Products from '../homepage/components/products/Products';
import MainFoot from '../../components/main-Foot/MainFoot';


const Shop = () => {
  return (
    <div className='shop'>
      <MainHead tiltle='Shop' para='shop' />
      <div className="container">
        <div className='shop-content'>
          <Products />
        </div>
      </div>
      <MainFoot />
    </div>
  )
}

export default Shop;