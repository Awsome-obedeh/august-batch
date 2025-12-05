import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard';
import { product } from '@/lib/data';
import React from 'react'
import { CiLocationOn } from "react-icons/ci";

export default function Contact() {
  return (
    <div>
        <Navbar />  
      <h3>This is the contact page</h3>
      {
        product.map((prod)=>(
          <ProductCard product={prod} key={prod.id}/>

        ))
      }
    </div>
  )
}
