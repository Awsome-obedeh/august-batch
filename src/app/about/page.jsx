import Navbar from '@/components/Navbar'
import Students from '@/components/Students'
import Test from '@/components/Test'
import React from 'react'

export default function About() {
  const status = "successfull"
  return (

    <div>
      <Navbar />
      <h3>This is the about page</h3>

      {
        status == 'pending' ? (
          <>

            <button className='w-10 h-10 rounded-full  bg-orange-600'></button><span>pending</span>
          </>

        ) : status == "successfull" ? (
          <>

            <button className='w-10 h-10 rounded-full  bg-green-600'></button><span>Succesfull</span>
          </>


        ) :
          <>

            <button className='w-10 h-10 rounded-full  bg-red-600'></button><span>failed</span>
          </>
      }


      <p className='text-red-700'>Ms Joy</p>
      <p className='text-red-700'>Mr Obinna</p>
      <p className='text-red-700'>Mr Victory</p>
      <p className='text-red-700'>Mr Dollakpo</p>
      <p className='text-red-700'>Mr Miracle</p>
      <p className='text-red-700'>Ms Alali </p>
      <p className='text-red-700'>Mr Obed</p>

    
      <Test />
    </div>
  )
}
