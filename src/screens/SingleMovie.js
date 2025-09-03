import React from 'react'
import { useParams } from 'react-router-dom'
import {moviesData} from '../data/moviesData'
import {MovieCasts, MovieInfo, MovieRates} from '../components/index'
import Titles from '../components/Titles'
import { BsCollectionFill } from 'react-icons/bs'
import Movie from '../components/Movie'
const SingleMovie = () => {
  const {slug} = useParams()
  const movie = moviesData.find(movie => movie.name === slug)
  const relatedMovies = moviesData.filter(m => m.category === movie.category)

  return (
    <div>
      <MovieInfo movie={movie}/>
      <div className='container mx-auto min-h-screen px-2 my-6'>
        <MovieCasts/>
        {/* movies rates*/}
        <MovieRates movie={movie}/>

        {/* related */}
        <div className='my-16'>
          <Titles title="Related Movies" Icon={BsCollectionFill}/>
          <div className='grid sm:mt-10 mt-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6'>
            {relatedMovies.map((movie,i)=>(
              <Movie movie={movie} key={i}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleMovie