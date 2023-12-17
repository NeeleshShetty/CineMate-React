import React, { useEffect } from 'react'
import Pagenotfound from "../assets/images/pagenotfound.png"
import { Link } from 'react-router-dom'
export const PageNotFound = () => {
  useEffect(()=>{
    document.title="Page Not Found / Cinemate"
  })
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className="flex flex-col items-center my-4">
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404 , Oops!!</p>
         
          <div className='max-w-lg'>
          <img src={Pagenotfound} alt="pagenotfound" />

          </div>
        </div>
        <div className=' flex justify-center my-4 '>
          <Link to="/">
          <button className=' w-64 text-3xl  bg-gradient-to-r from-indigo-500 px-2.5 py-2.5 rounded-lg font-bold dark:text-white' >Back to Home</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
