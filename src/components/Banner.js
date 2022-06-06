import React, { useEffect, useState } from 'react'
// import Img from "../banner.jpg"
import axios from 'axios'
import Pagination from './Pagination'

function Banner() {
  const [movies, setMovies] = useState({})
  const [page, setPageNo] = useState()
  

  useEffect(() => {

    (async ()  => {
      let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=561724aca29f339fd6c67777836dee74&language=en-US&page=${page}`)
      
        console.table(res.data.results)
        setMovies(res.data.results[0])
      
    })()

  }, [])


  return (
    <>
      <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})] h-[28vh] md:h-[70vh] bg-center bg-cover flex items-end justify-center`}>
        <div className=' text-xl md:text-3xl text-white p-4 bg-gray-900 w-full bg-opacity-50 flex justify-center'>{movies.title}</div>
      </div>
    </>
  )
}

export default Banner