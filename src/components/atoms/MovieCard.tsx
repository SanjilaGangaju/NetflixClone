import { Card } from "@/components/ui/card";
import type { Movie, MovieListProps } from "@/types";
const MovieCard = ({ movieslist }: MovieListProps) => {
  const TMDB_ASSETS_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="w-full overflow-x-scroll px-10 py-5 overflow-y-visible flex gap-20 no-scrollbar ">
      {movieslist.map((movie: Movie, index) => (
        <Card
          key={movie.id}
          className="h-[260px]  relative p-0 outline-none transition-all bg-black border-none rounded-xl hover:shadow-xl duration-300 hover:scale-106 cursor-pointer "
        >
          <span className="absolute bottom-0 -left-10 text-outline text-9xl text-black font-bold">
            {index + 1}
          </span>
          <div className="w-[13rem] h-full rounded-xl  ">
            <img
              className="h-full w-full object-fit  rounded-xl "
              src={
                movie?.poster_path
                  ? TMDB_ASSETS_URL + movie?.poster_path
                  : "/placeholder.svg"
              }
            ></img>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MovieCard;
