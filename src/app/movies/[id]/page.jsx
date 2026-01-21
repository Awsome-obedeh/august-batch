"use client"
import Movies from '@/components/Movies'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {
  const params=useParams()
  console.log("PARAMS",params)

  const [movie, setMovie]=useState('')
  
    const movieId=params.id
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    const getSingleMovie= async()=>{
      const res=await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${movieId}`, options)
      const data=await res.json() //conver to object 
      setMovie(data)
      console.log(data)

    }

    useEffect(()=>{
      // call function in use Effect to avoid infinite loop
      getSingleMovie()
    }, [movieId])


  return (
    <div>
      {
        movie? (
          <div className="w-40 bg-gray-600 rounded-md my-4 group " key={movie.id}>
                        <Link href={`movies/${movie.id}`}>
                        <Image src={movie.image} className=" " width={400} height={500}></Image>
                        </Link>

                        <div className=''>
                            <h4>{movie.title}</h4>
                            <p>{movie.genre.join(" ")}</p>
                            <p>{movie.year}</p> 
                            <p>{movie.director}</p> 

                        </div>
                    </div>
        ):(<p>Loading....</p>)
      }


    </div>
  )
}
