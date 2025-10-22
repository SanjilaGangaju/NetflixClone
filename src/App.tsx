import Header from "./components/Header";
import Hero from "./components/Hero";
import TrendingMovies from "./components/TrendingMovies";

const App = () => {
  return (
    <main>
       <div className="relative px-20 py-6 bg-[url(netflix-hero.jpg)] ">
      <div className="absolute inset-0  w-full h-full  bg-linear-to-t from--black to-black "></div>
      <div className="relative z-10 flex flex-col justify-center">
        <Header></Header>
        <Hero></Hero>
      </div>
      
    </div>
      <TrendingMovies/>
    </main>
   
    
  );
};

export default App;
