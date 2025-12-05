import Image from 'next/image'
import React from 'react'

export default function Members(props) {
  return (
    <div className='bg-green-600 p-3 w-50'>
      <Image className='rounded-md' src={props.src} width={200} height={200} alt='profl photo'/>
      <h2>Name: {props.name}</h2>
      <h2>Role: {props.role}</h2>
      <p>bio: {props.bio}</p>
      <h2>
        {props.src}
      </h2>

      
    </div>
  )
}
