import React, { useState } from 'react'
import Icons from '../../../components/Icon/Icon'
import {CSSTransition} from 'react-transition-group'

function KultLetoItem({name, sub, date, age, shedule, duration, price, location, maxNum, img}) {
  const [itemInfo, setItemInfo] = useState(false)

  return (
    <div className="kult-item">
      <div className="kult-item__body">

       <div className="kult-item__img" onMouseEnter={() => setItemInfo(true)} onMouseLeave={() => setItemInfo(false)}>
          <img src={img} alt="i" className="kult-item__img_image" />
          <div className="kult-item__img_content">

            
              <div className="kult-item-content" >
                <Icons className="kult-item-content__icon" name="age" size="24" color="#3b3b3b"/>
                <CSSTransition in={itemInfo} timeout={500} classNames={"kult-anim"} unmountOnExit>
                  <div className="kult-item-content__info">Рекомендованный возраст: {age}</div>
                </CSSTransition>
              </div>
            

            <div className="kult-item-content">
              <Icons name="time" size="24" color="#3b3b3b"/>
              <CSSTransition in={itemInfo} timeout={500} classNames={"kult-anim"} unmountOnExit>
                <div className="kult-item-content__info">Время: {shedule}</div>
              </CSSTransition>
            </div>

            <div className="kult-item-content">
              <Icons name="price" size="24" color="#3b3b3b"/>
              <CSSTransition in={itemInfo} timeout={500} classNames={"kult-anim"} unmountOnExit>
                <div className="kult-item-content__info">Стоимость: {price}</div>
              </CSSTransition>
            </div>

            <div className="kult-item-content">
              <Icons name="duration" size="24" color="#3b3b3b"/>
              <CSSTransition in={itemInfo} timeout={500} classNames={"kult-anim"} unmountOnExit>
                <div className="kult-item-content__info">Длительность: {duration}</div>
              </CSSTransition>
            </div>

            <div className="kult-item-content">
              <Icons name="maxNum" size="24" color="#3b3b3b"/>
              <CSSTransition in={itemInfo} timeout={500} classNames={"kult-anim"} unmountOnExit>
               <div className="kult-item-content__info">Максимальное кол-во мест: {maxNum}</div>
             </CSSTransition>  
            </div>

          </div>
       </div>

      <div className="kult-item__info">
        <div className="kult-item__date">{date}</div>
        <div className="kult-item__name">{name}</div>
        <div className="kult-item__sub">{sub}</div>
        
        <div className="kult-item__location">{location}</div>
      </div>
       
      </div>
    </div>
  )
}

export default KultLetoItem
