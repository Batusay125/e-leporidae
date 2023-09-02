import React from "react"
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'
import './dashboard.css'


const Dashboard = () => {
    return(
        <div className='dashboard flex'>
            <div className="dashboardContainer">
                <Sidebar/>
                <Body/>
            </div>

        </div>
    )
}

export default Dashboard