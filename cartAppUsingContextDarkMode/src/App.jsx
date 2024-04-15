import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import { createContext, useState } from 'react'


export const themeContext = createContext()
export const cartContext = createContext()
export const seachContext = createContext()

function App() {
 
  function setLightMode(){
    document.querySelector('body').setAttribute("data-theme",'light')
      localStorage.setItem("selectedTheme","light") 
  }
  function setDarkMode(){
    document.querySelector('body').setAttribute("data-theme", 'dark')
      localStorage.setItem("selectedTheme","dark")   
  }

  function toggleTheme(e){
   
    if(e.target.checked){
      setDarkMode()
    }else{
      setLightMode()
    }
  }

  const selectedTheme = localStorage.getItem("selectedTheme")
  if(selectedTheme==='light'){
    setLightMode()
  }else{
    setDarkMode()
  }


  

  // Context for cart:
  const [cart, setCart] = useState([])


  
  return (
    <themeContext.Provider value={{toggleTheme, selectedTheme}}>
    <cartContext.Provider value={{cart,setCart}}>
  
    <div className='app'>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
   
    </BrowserRouter>
    </div>
   
    </cartContext.Provider>
    </themeContext.Provider>
  )
}
export default App
