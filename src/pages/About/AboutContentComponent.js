import React from 'react'

function AboutContentComponent({ heading, text, src }) {
   return (
       <div className="about-content _content">
         <div className="about-content-wrapper _container">
             <div className="about-content-body">
                 <div className="about-content__title _heading">{heading}</div>
                 <div className="about-content__text">{text}</div>
             </div>
             <div className="about-content__image-container">
                <img className="about-content__image-container_img " src={src} alt="" />
             </div>
         </div>
      </div>
   )
}

export default AboutContentComponent