const Hero = () => {
  return (
    <div className='flex flex-col gap-10 py-10 h-[80vh] '>
         <div className='flex  flex-col items-center gap-7'> 
        <h1 className='text-white w-1/2 font-bold text-center text-6xl'>Unlimited movies, TV shows, and more</h1>
        <p className='text-white text-2xl font-bold'>Starts at USD 2.99. Cancel anytime.</p>
    </div>
    <div className='flex flex-col items-center gap-4'>
        <p className='text-white text-xl font-semibold w-1/2 text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='flex md:flex-row flex-col gap-4 items-center'>
            <input type="email" placeholder='Email address' className='border rounded text-white py-3 px-4 w-70 placeholder:text-white bg-black opacity-50'></input>
            <button className='bg-red-600 font-bold text-center text-white p-3 rounded text-xl'>
                <span>Get started </span>
                <span>+</span>
            </button>
        </div>
    </div>
    </div>
   
  )
}

export default Hero