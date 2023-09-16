import React from 'react'
import './delivery.css'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Body from './Components/Body delivery/DeliveryBody'


const Delivery = () => {
  return (
    <div className='delivery flex'>
        <div className="deliveryContainer">
            <Sidebar/>
            <Body/>
        </div>
    </div>
  )
}

export default Delivery