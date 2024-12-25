 
 
 import React from 'react';
import Navbar from './Components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home';
import Chat from './Components/Chat';
import About from './Components/About';
 

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/> <Home/></>
    },

    {
      path: "/Chat",
      element:<><Navbar/> <Chat/></> 
    }
    ,
    {
      path: "/About",
      element:<><Navbar/> <About/></> 
    }
])
  
 

  return (
    
   
    <>


<RouterProvider router={router}/>
 
    </>


  )
}

export default App
