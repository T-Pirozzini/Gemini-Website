import React from 'react'

export default function About() {
  return (
    <div>
      <div>
        <p className="first-letter:text-green-500">Serving Strata and Commercial clients across Vancouver Island.</p>
        <p className="first-letter:text-green-500">We provide full-service landscaping packages year-round.</p>
        <p className="first-letter:text-green-500">We are currently looking to expand our portfolio for the 2023 season.</p>
      </div>
      <div className="max-w-4xl m-14 p-5 grid grid-cols-12 row grid-rows-auto gap-4">
          <img className="overflow-hidden bg-[#fff] rounded-md border-8 border-[#fff]ml-auto mr-auto w-full h-full col-span-4 grayscale  hover:grayscale-0" src="/up3.jpg "></img>
          <img className="overflow-hidden bg-[#fff] rounded-md border-8 border-[#fff] ml-auto mr-auto w-full h-full col-span-4 row-start-1 row-end-3 grayscale  hover:grayscale-0" src="/up2.jpg"></img>
          <img className="overflow-hidden bg-[#fff] rounded-md border-8 border-[#fff]ml-auto mr-auto w-full h-full col-span-4 row-span-2 grayscale  hover:grayscale-0" src="/up1.jpg"></img>        
          <img className="overflow-hidden bg-[#fff] rounded-md border-8 border-[#fff]ml-auto mr-auto w-full h-full row-start-2 row-end-3 col-span-4 grayscale  hover:grayscale-0" src="/up4.jpg"></img>          
      </div>
    </div>
  )
}
