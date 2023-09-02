import React from 'react'
import './body.css'
import Top from './Top Section/Top'
import Listing from '../Body Section/Listing Section/Listing'
import Activity from '../Body Section/Activity Section/Activity'

const Body = () => {
  return (
    <div className='mainContent'>
      <Top/>

      <div className='bottom flex'>
        <Listing/>
        <Activity/>
      </div>
    </div>
  )
}

export default Body