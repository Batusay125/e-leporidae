import React from 'react'
import Top from './Top Section/Top'
import Bottom from './Bottom Section/Bottom'
import './body.css'

const Body = () => {
  return (
    <div className="billingContent flex">
        <Top/>
        <div className="billingBottom">
            <Bottom/>
            
        </div>
    </div>
  )
}

export default Body