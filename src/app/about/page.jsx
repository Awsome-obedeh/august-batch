import Navbar from '@/components/Navbar'
import React from 'react'

export default function About() {
    const status="successfull"
  return (
    
    <div>
        <Navbar />
      <h3>This is the about page</h3>

      {
        status=='pending' ? (
            <>
            
            <button className='w-10 h-10 rounded-full  bg-orange-600'></button><span>pending</span>
            </>

        ) : status=="successfull" ? (
            <>
            
            <button className='w-10 h-10 rounded-full  bg-green-600'></button><span>Succesfull</span>
            </>

      
        ) :  
        <>
        
        <button className='w-10 h-10 rounded-full  bg-red-600'></button><span>failed</span>
        </> 
      }


      
    </div>
  )
}
