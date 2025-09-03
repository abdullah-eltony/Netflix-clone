import React from 'react'
import Filters from '../components/Filters'
import { moviesData } from '../data/moviesData'
import Movie from '../components/Movie'
import {ClipLoader} from 'react-spinners'
const MoviesPage = () => {
  return (
    <div className='min-h-screen container mx-auto px-2 my-6'>
      <Filters/>
      <h2 className="text-lg">Total <span className='text-subMain'>11</span> items Found</h2>
      <div className='grid sm:mt-8 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
       {moviesData.map((movie,index)=>(
        <Movie key={index} movie={movie}/>
       ))}
      </div>
      <button className='w-auto flex gap-3 rounded items-center mx-auto my-24 py-3 px-4 border-2 border-subMain text-white font-semibold'>
        Load More <ClipLoader color="white" size={16}/>
      </button>
    </div>
  )
}

export default MoviesPage