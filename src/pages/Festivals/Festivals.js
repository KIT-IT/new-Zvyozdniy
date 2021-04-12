import React from 'react'
import { festivalsConfig } from '../../configurations/festivalsPageConfigurations/festivalsConfig'
import FestivalsItem from './FestivalsItem/FestivalsItem'

function Festivals() {
 const list = festivalsConfig.map(item => {
  return (
    <FestivalsItem
      key={item.id}
      backgroundImage={item.backgroundImage}
      title={item.title}
      name={item.name}
      text={item.info}
      place={item.place}
      date={item.date}
      age={item.age}
      href={item.href}
    />
  )
 })

 return (
  <div className="festivals wrapper">
    <div className="festivals__body">
      <div className="festivals-content">
        <ul className="festivals-content__list festivals-list">
          {list}
        </ul>
      </div>
    </div>
  </div>
 )
}

export default Festivals
