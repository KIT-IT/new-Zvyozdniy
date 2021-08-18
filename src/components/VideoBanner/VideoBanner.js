import React from 'react'
import video from '../../assets/video/open-doors-2021.mp4'

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
