import React from 'react'
import Image from "next/image"

export default function Navbar() {
  return (
    <div className="flex justify-center items-center">
      <img src="/gemini-logo.svg" width={150}></img>
      <div className="text-7xl  uppercase first-line:tracking-widest flex">
        <p className="first-letter:text-[#67a939] first-letter:text-8xl pr-4">Gemini</p> 
        <p className="first-letter:text-[#67a939] first-letter:text-8xl">Landscaping</p>
      </div>      
    </div>
  )
}
