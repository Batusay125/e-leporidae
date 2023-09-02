import React from 'react'
import './activity.css'

import {BsArrowRightShort} from 'react-icons/bs'
import user from '../../../Asset/tatang.png'
import user1 from '../../../Asset/user1.png'
import user2 from '../../../Asset/user2.png'
import user3 from '../../../Asset/user3.png'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className="icon"/>
        </button>
      </div>
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user} alt="Customer Image" />
          <div className="customerDetails">
             <span className="name">tatang</span>
             <small>Request Rehome</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
             <span className="name">marites</span>
             <small>Request Rehome</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image" />
          <div className="customerDetails">
             <span className="name">Yamato</span>
             <small>Request Rehome</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Image" />
          <div className="customerDetails">
             <span className="name">Nami</span>
             <small>Request Rehome</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

      </div>
    </div>
  )
}

export default Activity