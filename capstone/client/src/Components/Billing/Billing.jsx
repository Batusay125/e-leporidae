import React from 'react'
import './billinf.css'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Body from '../Billing/Components/Body Section/Body'


const Billing = () => {
  return (
    <div className='billing flex'>
      <div className="billingContainer">
        <Sidebar/>
        <Body/>

      </div>
    </div>
  )
}

export default Billing