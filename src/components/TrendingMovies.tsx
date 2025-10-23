
import { MOVIE_DATA } from '@/data/mockMovieData'
import MovieCard from './atoms/MovieCard'
const trendingMovies = MOVIE_DATA.results
const TrendingMovies = () => {
  return (
    <div className='bg-black px-16 overflow-x-scroll text-white  flex flex-col gap-5 px-20 py-6'>
        <h2 className='text-left text-3xl font-bold'>Trending Movies</h2> 
           {trendingMovies?.length>0?
           <MovieCard movieslist={trendingMovies}></MovieCard>:<div>No movies to show</div>}

    </div>


  )
}

export default TrendingMovies