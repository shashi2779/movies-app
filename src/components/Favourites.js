import React,{useState,useEffect} from 'react'
import Pagination from './Pagination'

function Favourites() {
  
  let genreids = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
    27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
  }


    const [currentGenres,setCurrentGenres] = useState("All Genres")   // button ka color blue/green kiya
    const [fav,setFav] = useState([])          // fav movie aayi
    const [genres, setGenres] = useState([])   // button(genres) ko dynamic krr liya - track the genres
    const [rating, setRating] = useState(0)
    const [popularity, setPopularity] = useState(0)
    const [curPage, setCurPage] = useState(1)
    const [search, setSearch] = useState("")
    const [rows, setRows] = useState(5)
    



    // for getting movies from local storage
   //  fav movie aaya ess se
  //   fav movie add kiye toh yha aaya
  useEffect(() => {
    let oldFav = localStorage.getItem("tmdb");
    // console
    oldFav = JSON.parse(oldFav) || [];
    console.log(oldFav);

    setFav(oldFav);
  }, [])


  //for genres get -> to build those blue/grey buttons
  // fav movie aane k bad genre nikale movie se 
  useEffect(() => {
    let temp = fav.map((movie) => genreids[movie.genre_ids[0]])
    console.log(temp)
    temp = new Set(temp) // unique entry (uni-value store krta h) : ek nam k multiple genre(button) h usko kam krat h ek hi show karega just like unique entry
    setGenres(["All Genres", ...temp]);
  }, [fav])



  // delete kiya movie ko 
    let removeMovies = (movie)=>{
      let newArr = fav.filter((m)=>m.id!=movie.id)
      setFav([...newArr])
      localStorage.setItem("tmdb",JSON.stringify(newArr))

  }

  
  
  // filtered movies 
  let filteredMovies = []

  filteredMovies = currentGenres == "All Genres" ? fav : fav.filter((movie) => genreids[movie.genre_ids[0]] == currentGenres)


 // sorting 
 if (rating == 1) {
  filteredMovies = filteredMovies.sort(function (objA, objB) { // sort , array sort krta h ... prr yha "array of obj" h toh "fun" ek lega sort krne k liye
    return objA.vote_average - objB.vote_average
  })
} else if (rating == -1) {
  filteredMovies = filteredMovies.sort(function (objA, objB) {
    return objB.vote_average - objA.vote_average
  })
}

if (popularity == 1) {
  filteredMovies = filteredMovies.sort(function (objA, objB) {
    return objA.popularity - objB.popularity
  })
} else if (popularity == -1) {
  filteredMovies = filteredMovies.sort(function (objA, objB) {
    return objB.popularity - objA.popularity
  })
} 


//searching
filteredMovies = filteredMovies.filter((movie) =>
movie.title.toLowerCase().includes(search.toLowerCase())
)


 // pagination
 let maxPage = Math.ceil(filteredMovies.length / rows);
 let si = (curPage - 1) * rows
 let ei = Number(si) + Number(rows)

 filteredMovies = filteredMovies.slice(si, ei);

 let goBack = () => {
   if (curPage > 1) {
     setCurPage(curPage - 1)
   }
 }

 let goAhead = () => {
   if (curPage < maxPage) {
     setCurPage(curPage + 1)
   }
 }


  return (
    <>
    <div className='flex justify-center flex-wrap mt-4 p-2 '>

      {
        genres.map((genre)=>
        
        <button className={ currentGenres == genre ? 'w-[120px] ml-3 h-[40px] bg-blue-400 rounded-lg  text-white  text-lg mb-3 ':'w-[120px] ml-3 h-[40px] bg-gray-400 rounded-lg  text-white  text-lg mb-3 hover:bg-blue-400' }    
       
        onClick={() => {
          setCurPage(1)
          setCurrentGenres(genre)
        }
        }
        
        >{genre}</button>
     

        )
      }
        {/* <button className={ currentGenres =="All generes"? 'w-[120px] ml-3 h-[40px] bg-blue-400 rounded-lg  text-white  text-lg mb-3 ':'w-[120px] ml-3 h-[40px] bg-gray-400 rounded-lg  text-white  text-lg mb-3 hover:bg-blue-400' }>All genres</button>
        <button className={currentGenres =="Action"? 'w-[120px] ml-3 h-[40px] bg-blue-400 rounded-lg  text-white  text-lg mb-3 ':'w-[120px] ml-3 h-[40px] bg-gray-400 rounded-lg  text-white  text-lg mb-3 hover:bg-blue-400' }>Action</button> */}

     </div>

     <div className='text-center mt-4'>
       <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' className='border-2 m-2 p-1 border-gray-500/50 text-center'/>
       <input type="number" value={rows} onChange={(e) => setRows(e.target.value)} placeholder='Rows' className='border-2 m-2 p-1 border-gray-500/50 text-center'/>
     </div>

     <div className="flex flex-col m-4">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 min-w-full">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className='flex'>
                      <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png' className='mr-2 h-[18px] md:h-full cursor-pointer'
                        onClick={() => {
                          setPopularity(0)
                          setRating(-1)
                        }}
                      />
                      Rating
                      <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png ' className='ml-2 h-[18px] md:h-full cursor-pointer'
                       onClick={() => {
                        setPopularity(0)
                        setRating(1)
                      }}
                      />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className='flex'>
                      <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png' className='mr-2 h-[18px] md:h-full cursor-pointer'
                        onClick={() => {
                          setRating(0)
                          setPopularity(-1)
                        }}
                      />
                      Popularity
                      <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png ' className='ml-2 h-[18px] md:h-full cursor-pointer'
                       onClick={() => {
                        setRating(0)
                        setPopularity(1)
                      }}
                      />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Genre
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMovies.map((movie) => (
                  <tr key={movie.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 md:h-[100px] md:w-[180px]">
                          <img className="hidden md:block md:h-[100px] md:w-[180px]" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 font-bold -ml-4 md:ml-0" >{movie.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 ml-10">{movie.vote_average}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 ml-10">{movie.popularity}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {genreids[movie.genre_ids[0]]}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                      <button href="#" className="text-red-600  hover:text-red-900 ml-2 md:-ml-12 "
                        onClick={() => removeMovies(movie)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

     <div className='mt-4'>
       <Pagination page={curPage} next={goAhead} previous={goBack}/>
    </div>
    </>
  )
}

export default Favourites