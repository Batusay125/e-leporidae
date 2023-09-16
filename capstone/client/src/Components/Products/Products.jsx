import React from 'react'
import './products.css'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Body from './Components/Product Body/ProductBody'

const Products = () => {
  return (
    <div className='product flex'>
      <div className="productContainer">
        <Sidebar/>
        <Body/>
      </div>
    </div>
  )
}

export default Products