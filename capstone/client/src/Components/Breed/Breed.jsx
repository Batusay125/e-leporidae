import React from 'react'
import './breed.css'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Body from './Components/Breed body/BodyBreed'

const Breed = () => {
  return (
    <div className='breed flex'>
      <div className="breedContainer">
        <Sidebar/>
        <Body/>
      </div>
    </div>
  )
}

export default Breed