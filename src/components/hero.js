import React from "react"
export default function Hero() {
    return (
<>
<section className="relative mt-16 mx-auto max-w-4xl px-4 sm:mt-24">
<div class="absolute top-0 w-36 h-36 bg-yellow-300 rounded-full"></div> 
<div className="relative text-center">

  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-8xl">
    <span className="block xl:inline">Izrada sajta, SEO
i </span>{' '}
    <span className="block text-blue-600 xl:inline">Digitalni Marketing</span>
  </h1>
  <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
    fugiat veniam occaecat fugiat aliqua.
  </p>
  <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
    <div className="rounded-md shadow">
      <a
        href="#"
        className="w-full flex items-center justify-center px-8 py-3 border-transparent border-2 border-blue-600 rounded text-base font-medium text-white bg-blue-600 transition hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
      >
        Get started
      </a>
    </div>
    <div className="mt-5 rounded-md shadow sm:mt-0 sm:ml-3">
      <a
        href="#"
        className="w-full flex items-center justify-center px-8 py-3  text-gray-900 transition bg-transparent border-2 border-black rounded text-base font-medium  hover:bg-gray-900 hover:text-white focus:outline-none md:py-4 md:text-lg md:px-10"
      >
        Live demo
      </a>
    </div>
  </div>
</div>
</section>
</>  
   )
}  