import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
        {/* overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-70'></div>
        <video 
        src="/images/hero1.mp4"
        autoPlay
        muted
        loop
        preload='metadata'
        className='w-full h-full object-cover'
        >
        </video>
        {/* text content */}
        <div className='absolute z-[100] w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]'>
        <div className='flex  items-center justify-center flex-col w-full h-full'>
            <div>
               <h1 className='text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase'>
                Lets Enjoy The Nature......</h1> 
                <p className='md:text-base'></p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero