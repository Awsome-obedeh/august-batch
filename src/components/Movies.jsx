"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Movies() {

    const [movies, setMovies] = useState([])

    // const movies = [
    //     {
    //         id: 1,
    //         title: "smallville",
    //         year: 20023,
    //         category: ['willfull', 'horroful', 'action'],
    //         imageUrl: '/profile.png',

    //     },
    //     {
    //         id: 1,
    //         title: "smallville",
    //         year: 20023,
    //         category: ['willfull', 'horroful', 'action'],
    //         imageUrl: '/profile.png',

    //     },
    //     {
    //         id: 1,
    //         title: "smallville",
    //         year: 20023,
    //         category: ['willfull', 'horroful', 'action'],
    //         imageUrl: '/profile.png',

    //     },
    //     {
    //         id: 1,
    //         title: "smallville",
    //         year: 20023,
    //         category: ['willfull', 'horroful', 'action'],
    //         imageUrl: '/profile.png',

    //     },
    //     {
    //         id: 1,
    //         title: "smallville",
    //         year: 20023,
    //         category: ['willfull', 'horroful', 'action'],
    //         imageUrl: '/profile.png',

    //     },
    // ]

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    console.log("BASE URL:", process.env.NEXT_PUBLIC_API_BASE_URL, "API KEY", process.env.NEXT_PUBLIC_API_KEY)


    // api call to imbd movies
    const getMovies = async () => {

        try {

            const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL, options)
            const data = await res.json()

            console.log(data)
            setMovies(data)

        }

        catch (error) {
            console.log("ERROR:", error.message)
        }


    }

    // called the function
    // we call the function once inside our use effect so it will run only once.
    useEffect(() => {
        getMovies()

    }, [])

    return (
        <div className='grid grid-cols-5 grid-rows-5 gap-10 justify-center flex-wrap '>

            {
                movies.length>0 ? 
                movies.map(movie => (
                    <div className="w-40 bg-gray-600 rounded-md my-4 group " key={movie.id}>
                        <Link href={`movies/${movie.id}`}>
                        <Image src={movie.image} className=" " width={400} height={500}></Image>
                        </Link>

                        <div className=''>
                            <h4>{movie.title}</h4>
                            <p>{movie.genre.join(" ")}</p>
                            <p>{movie.year}</p>

                        </div>
                    </div>
                )): (<p>Loading....</p>)
            }


        </div>
    )
}
