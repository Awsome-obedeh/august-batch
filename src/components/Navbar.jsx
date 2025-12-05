
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className='bg-blue-500 p-4 flex justify-around text-lg font-bold'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav >

    </div>
  )
}
