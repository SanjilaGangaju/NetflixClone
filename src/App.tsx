import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MovieList from './components/MovieList'

const App = () => {
  return (
    <div className='relative px-20 bg-[url(netflix-hero.jpg)] '>
        <div className='absolute inset-0  w-full h-full  bg-linear-to-t from--black to-black '>
        </div>
        <div className='relative z-10 flex flex-col justify-center'>
                         <Header></Header>
        <Hero></Hero>
        <MovieList></MovieList>
        </div>
       
    </div>
  )
}

export default App