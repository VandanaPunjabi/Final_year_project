import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-secondary'>
        <div className='form_container p-5 rounded bg-white'>
        <form>
                <h3 className='text-center'>Sign In</h3>
                <div className='mb-2'>
                    <label htmlFor='mobileno'><b>Mobile No</b></label>
                    <input type='text' placeholder='Mobile No'  className='form-control'/>
                </div>

                <div className='mb-2'>  
                    <label htmlFor='password'><b>Password</b></label>
                    <input type='password' placeholder='Enter Password' className='form-control'/>
                </div>

                <div className='mb-2'>
                    <input type='checkbox' className='custom-control-checkbox' id='check'/>
                    <label htmlFor='check' className='custom-input-label ms-2'>
                        Remember me
                    </label>
                </div>
                
        
                <div className='d-grid'>
                    <button className='btn btn-primary'>Sign In</button>
                </div>
                
                
                <p className='text-end mt-2'>
               Don't have a account? <Link to='/signup' className='ms-2'>Sign up</Link>
                </p>
         </form>
        </div>
    </div>
  )
}

export default Login