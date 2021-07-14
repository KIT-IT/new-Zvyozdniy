import React from 'react'
import Icons from '../../../components/Icon/Icon'

function LTLClubComponent({title, description, date, age, duration, shedule, maxNum, price, iconList, href}) {
  return (
    <div className="ltl-club">
      <div className="ltl-club__body">
        <div className="ltl-club__title">
          <h2 className="ltl-club__title_text">Смена {title}</h2>
        </div>
        <div className="ltl-club__description">
          <span className="ltl-club__description_text">{description}</span>
          <div className="ltl-club-images"> 
            <div className="ltl-club-images__body">
              {iconList}
            </div>
          </div> 
        </div>
        <div className="ltl-details">
          <div className="ltl-details__title">
            <div className="ltl-details__title_text">Важные детали:</div>
          </div>
          <ul className="ltl-details__list">

            <li className="ltl-details__list_item ltl-list-item">
              <div className="ltl-list-item__icon">
                <Icons className="ltl-list-item__icon_ico" name="date" size="40" color="#3b3b3b"/>
              </div>
              <div className="ltl-list-item__info">
                  <span className="ltl-list-item__info_text">{date}</span>
                  <span className="ltl-list-item__info_sub-text">(10 июля и 11 июля - выходные дни)</span>
              </div>
            </li>

            <li className="ltl-details__list_item ltl-list-item">
              <div className="ltl-list-item__icon">
                <Icons className="ltl-list-item__icon_ico" name="age" size="40" color="#3b3b3b"/>
              </div>
              <div className="ltl-list-item__info">
                  <span className="ltl-list-item__info_text">{age}</span>
              </div>
            </li>

            <li className="ltl-details__list_item ltl-list-item">
              <div className="ltl-list-item__icon">
                <Icons className="ltl-list-item__icon_ico" name="duration" size="40" color="#3b3b3b"/>
              </div>
              <div className="ltl-list-item__info">
                  <span className="ltl-list-item__info_text">{duration}</span>
              </div>
            </li>

            <li className="ltl-details__list_item ltl-list-item">
              <div className="ltl-list-item__icon">
                <Icons className="ltl-list-item__icon_ico" name="time" size="40" color="#3b3b3b"/>
              </div>
              <div className="ltl-list-item__info">
                  <span className="ltl-list-item__info_text">{shedule}</span>
              </div>
            </li>

            <li className="ltl-details__list_item ltl-list-item">
              <div className="ltl-list-item__icon">
                <Icons className="ltl-list-item__icon_ico" name="maxNum" size="40" color="#3b3b3b"/>
              </div>
              <div className="ltl-list-item__info">
                  <span className="ltl-list-item__info_text">{maxNum}</span>
              </div>
            </li>

            <li className="ltl-details__list_item ltl-list-item">
              <div className="ltl-list-item__icon">
                <Icons className="ltl-list-item__icon_ico" name="price" size="40" color="#3b3b3b"/>
              </div>
              <div className="ltl-list-item__info">
                  <span className="ltl-list-item__info_text">{price}</span>
              </div>
            </li>

          </ul>
        </div>
        <div className="ltl-button">
          <div className="ltl-button__body button">
            <a className="ltl-button__link" href={href} target="_blank" rel="noopener noreferrer">
              <span className="ltl-button__link_text">Запись</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LTLClubComponent
