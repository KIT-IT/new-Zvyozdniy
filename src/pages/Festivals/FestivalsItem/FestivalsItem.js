import React from 'react'

function FestivalsItem({src, title, name, text }) {
 return (
  <li className="festivals-list__item">
    <div className="festivals-image">
      <img className="festivals-image__img" src={src} alt="festivals"/>
    </div>
    <div className="festivals-content">
      <div className="festivals-content__title">{title}</div>
      <div className="festivals-content__name">{name}</div>
      <div className="festivals-content__info">
       <p className="festivals-content__info_text">{text}</p>
      </div>
    </div>
  </li>
 )
}

export default FestivalsItem
