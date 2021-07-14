import React from 'react'
import { mainLetoProgramesConfig } from '../../../configurations/leto2021/mainLetoConfig'
import LetoProgram from './LetoProgram/LetoProgram'
import LetoProgramElem from './LetoProgram/LetoProgramElem/LetoProgramElem'

function Leto() {
  const programes = mainLetoProgramesConfig.map(item => {
    return (
      <LetoProgram 
        key={item.id}
        title={item.title}
        subtitle={item.subtitle}
        to={item.to}
        list={item.programInfo.map(el => {
          return (
            <LetoProgramElem
              key={el.id}
              name={el.name}
              addClass={el.addClass}
              textValue={el.textValue}
              numberValue={el.numberValue}
            />
          )
        })}
      />
    )
  })


  return (
    <div className="leto">
      <div className="leto__body _container">
        <div className="leto__content _block">
          <div className="leto-info">
            <div className="leto-info__title">
              <span className="leto-info__title_text">Проведи лето ярче вместе с Звёздным</span>
            </div>
            <div className="leto-info__subtitle">
              <span className="leto-info__subtitle_text">Дом культуры Звёздный задаёт настроение лету 2021! В этом году детей Краснопахорского поселения ждут две интереснейшие программы.  </span>
            </div>
          </div>
          <div className="leto-programes">  
            {programes}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leto
