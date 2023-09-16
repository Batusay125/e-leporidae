import React from 'react'
import './charts.css'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Body from './Components/Body Charts/Body'
const Charts = () => {
  return (
    <div className='chart flex'>
      <div className="chartContainer">
        <Sidebar/>
        <Body/>

      </div>
    </div>
  )
}

export default Charts