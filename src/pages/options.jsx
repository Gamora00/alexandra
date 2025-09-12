import React from 'react'
import { Link } from 'react-router-dom';
import JourneyIcon from '../assets/journey.png'
import cameraIcon from '../assets/camera.png'
import musicIcon from '../assets/music.png'
import messageIcon from '../assets/message.png'
import '../style/options.css'
function Options() {

const choices = [
        {title: "Journey", Link: '/journey', icon: JourneyIcon},
        {title: "Moments", Link: '/moments', icon: cameraIcon},
        {title: "Message", Link: '/message', icon: messageIcon },
        {title: "Music", Link: '/music', icon:musicIcon},
    ]

  return (
    <div className='opt-container'>
        <div className='option-container'>
      {choices.map((element, index)=>(
        <div className='options' key={index}>
        <Link className='element' to={element.Link}>
        <img src={element.icon} width={40}/>
        <div className='element-btn'>{element.title}</div>
        </Link>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Options
