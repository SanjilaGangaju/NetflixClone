import type { Movie, MovieListProps } from '@/types'

const MovieList = ({movieslist}:MovieListProps) => {
  return (
    <div className='grid grid-cols-3 gap-5 items-center justify-center '>
       {movieslist.map((item:Movie)=><div className='rounded bg-red-600 text-center' key={item.id}>{item.title}</div>)}
    </div>
  )
}

export default MovieList