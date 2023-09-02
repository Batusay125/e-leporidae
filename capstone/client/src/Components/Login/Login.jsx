import React from "react"
import './Login.css'
import '../../App.css'
import { Link } from 'react-router-dom'

// assets of motherfucker

import video from '../LoginAsset/video.mp4'
import logo from '../LoginAsset/logo.png'
import rabbit from '../LoginAsset/rabbit.png'
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Login = () => {
    return(
        <div className='loginPage flex'>
        <div className="container flex">

             <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
                <h2 className='title'>Rehoming Process for rabbit</h2>
                <p>Adopt rabbit now!!</p>
            </div>

            <div className="footerDiv flex">
                <span className="text">Don't have account</span>
                <Link to={'/register'}>
                <button className='btn'> Sign Up</button>
                </Link>
            </div>
    </div> 

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={rabbit} alt="Logo Image" />
                    <h3>Welcome Back Motherfucker!!!</h3>
                </div>

                <form action="" className='form grid'>
                    <span className='showMessage'>Login status will go here Motherfucker!!</span>

                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                            <FaUserShield className='icon'/>
                            <input type="text" id='username' placeholder='Enter Name'/>
                        </div>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            <BsFillShieldLockFill className='icon'/>
                            <input type="password" id='password' placeholder='Enter Password'/>
                        </div>
                    </div>

                    <button type='submit' className='btn flex'>
                        <span> 
                            Login 
                            </span>
                        <AiOutlineSwapRight className='icon'/>
                    </button>

                    <a href="dashboard">Dashboard</a>

                    <span className="forgetPassword">
                        Forgat your password? <a href="">Click</a>

                    </span>

                </form>
            </div>

        </div>
        </div>
    )
}

export default Login