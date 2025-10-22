
import { MOVIE_DATA } from '@/data/mockMovieData'
import MovieList from './MovieList'
const trendingMovies = MOVIE_DATA.results
const TrendingMovies = () => {
  return (
    <div className='bg-black text-white flex flex-col items-center px-20 py-6'>
        <h2>Trending Movies</h2> 
                   {trendingMovies?.length>0?<MovieList movieslist={trendingMovies}></MovieList>:<div>No movies to show</div>}

    </div>


  )
}

export default TrendingMovies