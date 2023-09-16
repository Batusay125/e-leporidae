import React from 'react'
import './contacts.css'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Body from './Components/Contacts Body/BodyContact'

const Contacts = () => {
  return (
    <div className='contact flex'>
      <div className="contactContainer">
        <Sidebar/>
        <Body/>
      </div>
    </div>
  )
}

export default Contacts