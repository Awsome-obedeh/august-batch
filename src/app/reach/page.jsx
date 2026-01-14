"use client"
import React, { useState } from 'react'
export default function RequestForm() {

    const [firstname, setFirstname] = useState('')

    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const [gender, setGender] = useState('')
    const [error,setError]=useState('')

    console.log("Message:", message)

    // /function to handle form submission
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(e)

        if(!firstname){
            setError('firstname is required')
            console.log("firstname is required")
        }
    }





    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-xl">
            <h2 className="text-2xl font-semibold text-center mb-6 text-black">
                Send a Request
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>

                <p className='text-red-800'>{error}</p>
                <div className="flex gap-3 text-black">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                        
                        onChange={(e)=>setFirstname(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                        
                        onChange={(e)=>setLastname(e.target.value)}
                    />
                </div>

                {/* Email */}
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    
                    onChange={(e)=>{setEmail(e.target.value)}}
                />

                {/* Phone */}
                <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    
                    onChange={(e)=>{setEmail(e.target.value)}}


                />

                {/* Message */}
                <textarea
                    placeholder="Write your request here..."
                    value={message}
                    className="text-black w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[120px]"
                    
                    onChange={(e)=>{setMessage(e.target.value)}}

                />

                <label htmlFor="">Gender</label>
                <select name="gender" id="">
                    <option value="male">male</option>
                    <option value="female">Female</option>
                </select>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}



