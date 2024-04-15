import React, { useContext } from 'react'
import './ModeToggle.css'
import { themeContext } from '../App'
import 'react-toggle'

const ModeToggle = () => {
  
    const {toggleTheme, selectedTheme} = useContext(themeContext)
 
  return (
    <>
    
    <input type='checkbox' 
    className='checkbox' 
    onChange={toggleTheme}
    defaultChecked={selectedTheme==='dark'} />
    {/* <span className='theme-text'>{theme}</span> */}
    </>
  )
}

export default ModeToggle