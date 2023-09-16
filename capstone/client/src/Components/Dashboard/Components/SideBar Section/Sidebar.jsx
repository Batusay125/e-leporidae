import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

import logo from '../../Asset/rabbit.png'

import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {AiFillPieChart} from 'react-icons/ai'
import {AiTwotoneHeart} from 'react-icons/ai'
import {MdPermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Back} from 'react-icons/bs'
import {BsQuestionDiamondFill} from 'react-icons/bs'
import {BiLeftArrowAlt} from 'react-icons/bi'
import {BsArrowLeftCircle} from 'react-icons/bs'
import order from '../../../Orders/order'


const Sidebar = () => {
  return (

    <div className='sideBar grid'>
      <div className='logoDiv flex'>
        <img src={logo} alt="Image name"/>
        <h2>Rabbit</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK mENU
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href={'/dashboard'} className='menuLink'>
              <IoMdSpeedometer className="icon"/>
              <span className="smallText">
                Dashboard
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href={'/delivery'} className='menuLink'>
              <MdDeliveryDining className="icon"/>
              <span className="smallText">
                Delivery
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href={'/products'} className='menuLink'>
              <BsTrophy className="icon"/>
              <span className="smallText">
                Products
              </span>
            </a>
          </li>

        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href={'/charts'} className='menuLink'>
              <AiFillPieChart className="icon"/>
              <span className="smallText">
                Charts
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href={'/breed'} className='menuLink'>
              <AiTwotoneHeart className="icon"/>
              <span className="smallText">
                Breed
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href={'/contacts'} className='menuLink'>
              <MdPermContactCalendar className="icon"/>
              <span className="smallText">
                Contact
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href={'/billing'} className='menuLink'>
              <BsCreditCard2Back className="icon"/>
              <span className="smallText">
                Billing
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="logoutDiv">
        <ul className="menu grid">
        <button className="logout">
            <a href={'/'} className='link'>
            <BsArrowLeftCircle className="icon"/>
              <span className="smallText">
               Logout
              </span>
            </a>
          </button>
        </ul>
      </div>

      
      <div className="sideBarCard">
        <BsQuestionDiamondFill className="icon"/>
        <div className="cardContent">

          <h3>Help center</h3>
          <button className='btn'>Go to Help Center</button>
        </div>
      </div>
      


    </div>
    
  )
}

export default Sidebar