"use client"
import React, { useState } from 'react'

const page = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState("")

    // function to handle form submission

    const handleSubmit = (e) => {
        // prevent default form submission
        e.preventDefault()
        console.log(e)
        if (!firstname) return setErr("firstname is required")
        if (!lastname) return setErr("lastname is required")
        if (!email) return setErr("email is required")
        if (!password) return setErr("password is required")
        setErr('')
        alert("form submitted successfully")
    }



    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-50 p-6 bg-white rounded-lg flex flex-col shadow-lg space-y-4">
                    {
                        err ? (<div className="bg-red-800 text-white rounded-2xl py-4 px-3">
                            < small className='text-white text-center text-2xl '>Error: {err}</small>
                        </div>) : " "
                    }

                    <h2 className="text-black font-bold text-5xl">Login</h2>
                    <div>
                        <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            
                            type="text"
                            id="firstname"
                            onChange={(e) => setFirstname(e.target.value)}
                            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />

                        {<p className='text-black'>firstname:{firstname}</p>}
                    </div>


                    <div>
                        <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            id="lastname"
                            onChange={((e) => setLastname(e.target.value))}
                            className=" text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />

                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            onChange={((e) => setEmail(e.target.value))}

                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />

                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>

                        <input
                            onChange={((e) => setPassword(e.target.value))}

                            id="password"
                            className=" text-black w-full px-3 py-2 border  text-black border-gray-300 rounded-md shadow-sm pr-10"
                        />


                        <span
                            className="absolute right-3 top-10 cursor-pointer text-gray-600"

                        >

                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </div>
    )
}

export default page
