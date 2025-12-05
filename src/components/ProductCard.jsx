import Image from 'next/image'
import React from 'react'
import { CiLocationOn } from "react-icons/ci";

const ProductCard = (props) => {
  return (
    <>
    <div div className='border p-4 space-y-2 bg-gray-400' key={props.product.id}>
      <Image  className="w-50 h-50 " src={props.product.imageUrl} width={400} height={400} alt="Product Image" />

      <h1 className='text-green-500 text-bold '># {props.product.price}</h1>
      <p className='text-base'>{props.product.name}</p>
      <p className='text-gray-500'>{props.product.description}</p>

      <span className='bg-orange-300 text-sm'>used</span>
      <p> <CiLocationOn /> Lagos</p>
    </div>
    </>
  )
}

export default ProductCard
