"use client"
import React, { useState } from 'react'

export default function Todo() {
    const [tasks, setTasks]=useState(["WORK", "read", "market", "sleeep"])
    const [isTaskCompleted, setIstaskCompleted]=useState(false)
    const [work, setWork]=useState('')

    const handleCompleted=()=>{
        // setIstaskCompleted(!isTaskCompleted)
        setIstaskCompleted(prev=>!prev)
    }

    const handleOnclick=()=>{
        if(!work) return 
       setTasks( [...tasks, work])
    }

    const handleOnchange=(e)=>{
        console.log(e)
        setWork(e.target.value)
    }

    console.log(tasks)
  return (
    <div>
        <p>{work}</p>
      <div className='w-75 h-10 '></div>
        <input onChange={handleOnchange}  type="text" className='border-3 border-gray-600 w-1/3  px-4 py-2 outline-none' />
        <button onClick={handleOnclick} className="px-6 py-3 rounded-md bg-green-500 text-white">Add</button>

    <ul className='bg-gray-800'>
       {
        tasks.map(task=>(
            <li  className={`${isTaskCompleted ? 'line-through text-gray-600':'text-white '} odd:bg-gray-800 even:bg-gray-100 px-3 py-4 `} key={task}>{task} <input onChange={handleCompleted} type="checkbox" name="" id="" /></li>
        ))
       }
        
    </ul>

    </div>
  )
}
