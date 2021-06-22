import React from "react"
export default function Footer() {
    return (
          <div className="items-center ">
          <footer className="text-blueGray-700 transition duration-500 ease-in-out transform bg-white border rounded-lg ">
            <div className="container flex flex-col flex-wrap p-8 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
              <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                <a href="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
                  <div className="inline-flex items-center">
                    <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
                    </div>
                    <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8"> wickedblocks </h2>
                  </div>
                </a>
              </div>
              <div className="flex flex-wrap flex-grow mt-8 -mb-10 text-left md:pl-20 md:mt-0 ">
                <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                  <h1 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Product </h1>
                  <nav className="mb-10 space-y-4 list-none">
                  <ul>
                    <li>
                      <a className=" mr-1 text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Email Templates</a>
                    </li>
                    <li>
                      <a className=" mr-1 text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Web Templates</a>
                    </li>
                    <li>
                      <a className=" mr-1 text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Figma Files</a>
                    </li>
                    <li>
                      <a className=" mr-1 text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Sketch Files</a>
                    </li>
                    </ul>
                  </nav>
                </div>
                <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                  <h1 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Company </h1>
                  <nav className="mb-10 space-y-4 list-none">
                  <ul>  
                    <li>
                      <a className=" mr-1 text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Home</a>
                    </li>
                    <li>
                      <a className=" mr-1 text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">About</a>
                    </li>
                    <li>
                      <a className=" mr-1 text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Carriers</a>
                    </li>
                    <li>
                      <a className=" mr-1 text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Pricing</a>
                    </li>
                    </ul>
                  </nav>
                </div>
                <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                  <h1 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Legal </h1>
                  <nav className="mb-10 space-y-4 list-none">
                  <ul>
                    <li>
                      <a className=" mr-1 text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Privacy Policy</a>
                    </li>
                    <li>
                      <a className=" mr-1 text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Terms Of Service</a>
                    </li>
                    <li>
                      <a className=" mr-1 text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Trademark Policy</a>
                    </li>
                    <li>
                      <a className=" mr-1 text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Inactivity Policy</a>
                    </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="w-full px-8 mt-4 rounded-b-lg bg-blueGray-50">
              <div className="container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row">
                <p className="text-center text-black sm:text-left ">© {new Date().getFullYear()} </p>
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <a className="text-blue-500 hover:text-black">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-blue-500 hover:text-black">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                      </path>
                    </svg>
                  </a>
                  <a className="ml-3 text-blue-500 hover:text-black">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-blue-500 hover:text-black">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                      <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                      </path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </div>
   )
}      