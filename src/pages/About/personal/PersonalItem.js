import React from 'react'

function PersonalItem({ src, name, position }) {
   return (
      <>
         <div className="personal-item">
            <img className="personal-item__photo" src={src} alt="" />
            <div className="personal-item__discription">
               <p className="personal-item__discription_name">{name}</p>
               <p className="personal-item__discription_position">{position}</p>
            </div>
         </div>
      </>
   )
}

export default PersonalItem