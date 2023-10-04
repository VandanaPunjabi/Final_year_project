import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

function Home_Screen() {
  return (
    <>
    <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-secondary'>
         <div className='form_container p-5 rounded bg-white'>
            <div>
                <h1><Link to='/login'>Login</Link></h1>
            </div>
            <div>
            <h1><Link to='/signup'>Signup</Link></h1>
                
            </div>

            <div>
            <h1><Link to='/options'>Food Selection</Link></h1>
                
            </div>

            <div>
            <h1><Link to='/dash'>Dashboard</Link></h1>
            </div>

         </div>
    </div>
    </>
  )
}

export default Home_Screen