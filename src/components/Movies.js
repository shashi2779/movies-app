import React, { useEffect, useState } from 'react'
// import Img from "../banner.jpg"
import axios from 'axios'
import { Oval } from 'react-loader-spinner'
import Pagination from './Pagination'


function Movies() {
    const [movies, setMovies] = useState([])
    const [page, setPageNo] = useState(1)
    const [hover,setHover] = useState('')
    const [fav,setFav] = useState([])

    function next() {
        setPageNo(page + 1)
    }

    function previous() {
        if (page > 1)
            setPageNo(page - 1)
    }

    useEffect(() => {

        (async () => {
            //get request on tmdb api for show movies arr
            let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=561724aca29f339fd6c67777836dee74&language=en-US&page=${page}`)
            setMovies(res.data.results)

            //local storage se movie get(mtlb ki add krne k bad refress krne prr movie phir se load ho rhi thi jisko add kiya tha vo hat ja rhi thi toh hmne "get kiya" toh jo movie pahle add thi vo add hi dikhaye ga ) krna 
            // get krne se jo movie phle add thi usko add hi dikhayega user ko (refress krne prr phir se vo movie load nhi hogi add karne ko)
            let oldFav = localStorage.getItem("tmdb")
            oldFav = JSON.parse(oldFav)
            setFav([...oldFav])

        })()


    }, [page])

    //movies like
    let addMovies = (movie)=>{
        let newArrMovies = [...fav,movie]
        setFav([...newArrMovies])
        //local storage pr movie ko store/set krna
        localStorage.setItem("tmdb",JSON.stringify(newArrMovies))
    }

    //movies dislike
    let removeMovies = (movie)=>{
        let newArr = fav.filter((m)=>m.id!=movie.id)
        setFav([...newArr])
        localStorage.setItem("tmdb",JSON.stringify(newArr))

    }


    return (
        <>
            <div className='flex flex-col items-center '>
                <div className='mt-8 text-bold text-2xl font-bold mb-8'>Tranding Movies</div>
                {
                    movies.length == 0 ?
                        <div>
                            <Oval
                                height="100"
                                width="100"
                                color='grey'
                                secondaryColor='grey'
                                ariaLabel='loading'
                            />
                        </div> :

                        <div className='flex flex-wrap items-center justify-center  '>
                            {
                                movies.map((movie) => (
                                    <div className={`bg-[url(https://image.tmdb.org/t/p/original${movie.backdrop_path})] h-[25vh] w-[160px] md:h-[30vh] md:w-[230px] bg-center bg-cover rounded-xl flex items-end mb-4 m-4 hover:scale-110 ease-out duration-300 md:hover:scale-110 ease-out duration-300 relative`} onMouseEnter={()=>{setHover(movie.id) }}  onMouseLeave={()=>{setHover('')}} >
                                       {
                                           movie.id == hover && <>
                                           {
                                              !fav.find((m) => m.id == movie.id) ? 
                                              <div className='absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl cursor-pointer' onClick={()=>addMovies(movie)}>👍</div> 
                                              : 
                                              <div className='absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl cursor-pointer' onClick={()=>removeMovies(movie)}>👎</div>
                                              
                                            }
                                           </>
                                       }
                                        
                                        <div className=' p-2 text-white bg-gray-900 w-full bg-opacity-50 flex justify-center rounded-b-md text-blod text-xl'>{movie.title}</div>
                                    </div>
                                ))

                            }

                        </div>
                }
            </div>
            <Pagination page={page} next={next} previous={previous} />
        </>
    )
}


export default Movies