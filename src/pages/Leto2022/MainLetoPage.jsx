import React from 'react'
import { mainLetoProgramesConfig } from '../../configurations/leto2022/mainConfig'
import LetoProgram from './MainLeto/LetoProggram'
import LetoProgramElem from './MainLeto/LetoProggramElem'

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
              <div className="leto-info__subtitle_text">Дом культуры Звёздный задаёт настроение лету 2022! Летние каникулы – долгожданная и любимая детьми пора и настоящий бег с препятствиями для родителей, ведь всем хочется, чтобы ребенок проводил это время весело, с пользой и желательно под присмотром. В этом году детей Краснопахорского поселения ждут две интереснейшие программы.</div>
              <div className="leto-info__subtitle_text">Мы приглашаем ребят на КУЛЬТЛЕТО  – Веселое и познавательное путешествие! Ваших детей ждут приключения в разных направлениях на выбор. Участники программы смогут сделать своими руками поделки разной сложности, например, скворечники для птиц. Также дети смогут познать искусство пластики с бумагой, изготовить цветы из папье-маше и другие изделия. Для творческого развития есть театральное направление и обучение вокалу. Многие играли во дворе: классики, прыжки через резинку, вышибалы и многое другое.</div>
              <div className="leto-info__subtitle_text">ЛЕТНЯЯ ТВОРЧЕСКАЯ ЛАБОРАТОРИЯ – это десятидневные программы, которые займут вашего ребенка на целый день. Каждая программа уникальна по своему содержанию и ежегодно обновляется с учетом новых интересов детей. Каждый день участников летней творческой лаборатории ждут интеллектуальные, творческие, развлекательные активности, которые позволяют ребенку раскрыться и при этом попробовать для себя что – то новое.</div>
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