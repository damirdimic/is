import React from "react"
export default function NaslovnaHeader() {
    return (
      <div className="bg-gray-50">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="absolute top-0 -left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div class="absolute top-0 -right-1/4 w-72 h-72 bg-yellow-300 rounded-full"></div>
        <div class="absolute bottom-0 left-20 w-36 h-36 bg-pink-300 rounded-full"></div>
        <div class="absolute bottom-0 right-20 w-36 h-36 bg-blue-300 rounded-full"></div>
          <div className="text-center relative">
            
            <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Izrada sajta, SEO <br/>i Digitalni Marketing
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Mi smo profesionalna digitalna agencija. Rastemo sa uspehom naših klijenata. Dopustite nam da vam pomognemo da osvojite digitalna tržišta.
            </p>
          </div>
        </div>
      </div>
    )
  }