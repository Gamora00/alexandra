import React from 'react'
import {Link} from 'react-router-dom'
import '../style/landing.css'
function Landing() {
  return (
    <div className='landing-container'>
        <div className='landing-info'>
                <h1>Hello, Alex!</h1>
                <h2>This is our own website. </h2>
                <p>I hope you like it</p>
                <div className='startBtn'>
                  <Link className='startLink' to={"/choices"}>Get in touch</Link>
                </div>

        </div>
    </div>
  )
}

export default Landing
