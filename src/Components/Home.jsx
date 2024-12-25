import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
  <>
  

  <div className="bg-emerald-800 min-h-screen flex justify-center items-center px-4">
      <div className="bg-emerald-950 w-full max-w-lg md:max-w-2xl lg:max-w-4xl rounded-xl shadow-lg p-8">
        {/* Logo Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <img src="/logo.png" className="w-28 md:w-36" alt="ChatTrix Logo" />
          <h1 className="text-white font-bold text-3xl md:text-5xl">ChatTrix</h1>
        </div>

        {/* Form Section */}
        <div className="flex justify-center">
          <form className="flex flex-col w-full max-w-sm gap-6">
            
           
           <Link to="/Chat">  <button 
                className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 w-full transition-all duration-200">
                Continue to Chat
              </button>
              </Link> 
          </form>
        </div>
      </div>
    </div>

  </>
  )
}

export default Home