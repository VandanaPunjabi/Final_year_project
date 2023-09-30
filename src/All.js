import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

export const All = () => {
  return (
    <div>
        <Link to = '/'>Login</Link>
        <Link to='/signup'>Signup</Link>
    </div>
  )
}
