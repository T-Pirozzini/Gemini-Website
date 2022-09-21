import React from 'react'
import Image from "next/image"

export default function Navbar() {
  return (   
    <div className="flex justify-center items-center">
      <div>
        <img className="pr-4" src="/gemini-logo.svg" width={150}></img>
      </div>
      <div className="text-7xl uppercase first-line:tracking-widest flex border-b-4 border-[#67a939] rounded-md">
        <p className="first-letter:text-[#67a939] first-letter:text-8xl first-line:tracking-widest pr-4">Gemini</p> 
        <p className="first-letter:text-[#67a939] first-letter:text-8xl first-line:tracking-widest">Landscaping</p>
      </div>      
    </div>    
  )
}
