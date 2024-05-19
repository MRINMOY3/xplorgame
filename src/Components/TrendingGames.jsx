import React, { useEffect } from 'react'

function TrendingGames({gameList}) {

    useEffect(()=>{
        console.log(gameList)
    },[])


  return (
<div className='mt-5 hidden md:block'>
    <h2 className='font-bold text-[30px] dark:text-white text-sky-500'>Trending Games ... </h2>
    <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
        {gameList.map((item, index) => index < 4 && (
            <div key={index} className='my-2 p-1 bg-slate-400  dark:bg-violet-500  bg-opacity-20 rounded-lg overflow-hidden group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer '>
                <img className='w-full h-48 object-cover rounded-lg' src={item.background_image} alt={`${item.name} background`} />
                <h5 className='font-bold text-sm p-2 text-blue-500 dark:text-white'>{item.name}</h5>
            </div>
        ))}
    </div>
</div>


  )
}

export default TrendingGames