import React from 'react'
import { festivalsConfig } from '../../configurations/festivalsConfig'
import './Festivals.scss'
import FestivalsItem from './FestivalsItem/FestivalsItem'

function Festivals() {
 const list = festivalsConfig.map(item => {
  return (
    <FestivalsItem
      key={item.id}
      src={item.img}
      title={item.title}
      name={item.name}
      text={item.info}
    />
  )
 })

 return (
  <div className="festivals wrapper">
    <div className="festivals__body _container">
      <h1 className="festivals__body_title _title">Фестивали</h1>
      <div className="festivals__body_content">
        <ul className="festivals-list">
          {list}
        </ul>
      </div>
    </div>
  </div>
 )
}

export default Festivals
