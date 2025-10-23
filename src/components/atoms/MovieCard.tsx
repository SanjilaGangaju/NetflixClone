import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { Movie, MovieListProps } from "@/types";
const MovieCard = ({ movieslist }: MovieListProps) => {

  return (
    <div className="w-full overflow-x-scroll px-10 py-5 overflow-y-visible flex gap-20 no-scrollbar ">
      {movieslist.map((movie: Movie, index) => (
        <Card key={movie.id} className="h-[350px] relative cursor-pointer bg-pink-50 transition delay-1 duration-300 hover:scale-105 " >
            <span className="absolute bottom-0 -left-10  text-outline text-9xl text-black font-bold">{index+1}</span>
          <CardHeader className="w-[260px] ">
            <CardTitle >{movie.title}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default MovieCard;
