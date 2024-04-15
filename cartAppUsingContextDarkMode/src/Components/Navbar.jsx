import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import ModeToggle from './ModeToggle'
import { themeContext } from '../App'


function Navbar() {
 
  return (
    <div className='navbar'>
        <div className='navlink'>
           <NavLink  to='/' 
            style={({isActive}) => (isActive?{color:"red"}:{})}
            >
                Home
                </NavLink> 
            </div>
        <div className='navlink'>
        <NavLink to='/products' 
         style={({isActive}) => (isActive?{color:"red"}:{})}
        >Products</NavLink> 
            </div>
        <div className='navlink'>
        <NavLink to='/cart' 
         style={({isActive}) => (isActive?{color:"red"}:{})}
        >Cart</NavLink> 
            </div>  
            <div className='theme-component'>
            <ModeToggle />
            </div>
           
              
           
    </div>
  )
}

export default Navbar