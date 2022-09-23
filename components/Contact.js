import React, { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';


export default function Contact() {
  const [progress, setProgress] = useState(false)
  let spinner
  if (progress) {
    spinner = <CircularProgress color="secondary" />
  }

   return (
    <div>
      <button className="btn" onClick={() => setProgress(true)}>Click Me</button>    
      {spinner}      
    </div>
  )
}
