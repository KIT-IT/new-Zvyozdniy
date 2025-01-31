import React from 'react'
//import video from '../../assets/images/aboutPageImages/about-content-1.jpeg'
import video from '../../assets/video/DKZV.mp4'

function VideoBanner() {
  return (
      <div className="full-screen">
        <video playsInline={true} disablePictureInPicture={true} autoPlay muted loop  preload="auto" className="full-screen__vidio">
          <source src={video} type="video/mp4" />
        </video>
      </div>
  )
}

export default VideoBanner
