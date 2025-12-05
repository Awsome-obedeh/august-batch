import React from 'react'

export default function Profile(props) {
  console.log(props)
     
  return (

    <div>
    
    <div className='w-50 my-4 bg-blue-600 p-4 rounded-md'>
      <h2>Name: {props.name}</h2>
      <h2>sex: {props.sex}</h2>
      <h2>age: {props.age}</h2>
      <h2>nationality: {props.nationality}</h2>
    </div>
    
    </div>
  )
}
