import React from 'react'
import Link from 'next/link'
import '@/public/styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="bg-black text-white w-full h-[10vh] py-4 px-6 md:px-8 lg:px-12">
      <div className="container mx-auto flex flex-col sm:flex-row md:justify-between items-center justify-center">
        <div className="heading text-4xl font-bold mb-4 sm:mb-0">
          <Link href="/" className="hover:text-gray-300 transition duration-300">
            HearEase
          </Link>
        </div>
        <div className="download text-base">
          <Link
            href="/download"
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300"
          >
            Download App
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar