import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


import Cute from '../assets/cute.jpg'
import Epic from '../assets/epic.jpg'
import LiveValo from '../assets/liveValo.jpg'
import Val1 from '../assets/val1.jpg'
import Roblox from '../assets/roblox.jpg'

import '../style/moments.css'

function Moments() {
   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true,     // whether animation should happen only once
    });
  }, []);
  
  const moments = [
    {image: Cute},
    {image: Epic},
    {image: LiveValo},
    {image: Val1},
    {image: Roblox}

  ]

  return (
    <div className='Moments'>
      <h1>Moments</h1>
      <div data-aos="fade-up" className='moments-container'>
          {moments.map((element, index)=>(
            <img key={index} src={element.image} alt="" width={250}/>
          ))}
      </div>
    </div>
  )
}

export default Moments
