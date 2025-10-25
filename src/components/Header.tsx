import SearchBar from "./atoms/SearchBar"


const Header = () => {
  return (
    <header className="flex justify-between items-center px-20 py-10">
      
      <div className="text-7xl  text-red-600 font-bold">
         Netflix
      </div>
      <div className="flex gap-4">
          <SearchBar/>
      <button className="bg-red-600 rounded px-4 text-center text-xl h-10  text-white font-bold">Sign in</button>
      </div>
    
    </header>  )
}

export default Header
