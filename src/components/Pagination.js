import React from 'react'

function Pagination({page,next,previous}) {


  return (
    <>
    <div className='w-full flex items-center justify-center mt-8 mb-8'>
        <button className='md:w-[80px] md:h-[40px] w-[70px] h-[40px] border-2 border-indigo-500 text-indigo-500 border-r-0 md:rounded-l-xl rounded-l-lg ' 
        onClick={previous}
        >Previous</button>
        <button className='md:w-[80px] md:h-[40px] w-[70px] h-[40px] border-2 border-indigo-500 text-indigo-500 bg-gray-100 '>
          {page}
          </button>
        <button className='md:w-[80px] md:h-[40px] w-[70px] h-[40px] border-2 border-indigo-500 text-indigo-500 border-l-0 md:rounded-r-xl rounded-r-lg' 
        onClick={next}
        >Next</button>
    </div>
    </>
  )
}

export default Pagination