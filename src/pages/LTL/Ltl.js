import React from 'react'
import Icons from '../../components/Icon/Icon'
import { ltlClubConfig, ltlConfig } from '../../configurations/leto2021/ltlConfig'
import LTLClubComponent from './LTLClubComponent/LTLClubComponent'
import LTLDiagram from './LTLDiagram/LTLDiagram'
import LTLDiscontBlock from './LTLDiscontBlock/LTLDiscontBlock'

function Ltl() {
  const list = ltlConfig.map(item => {
    return (
      <LTLDiagram key={item.id} date={item.time} title={item.title} description={item.description}/>
    )
  })

  const clubsList = ltlClubConfig.map(item => {
    return (
      <LTLClubComponent 
        key={item.id}
        title={item.title}
        description={item.description}
        age={item.age}
        date={item.date}
        duration={item.duration}
        shedule={item.shedule}
        price={item.price}
        maxNum={item.maxNum}
        href={item.href}
        iconList={item.icon.map(elem =>{return <Icons key={elem.id} name={elem.name} size={elem.size} className={elem.className}/>})}
      />
    )
  })





  return (
    <div className="ltl wrapper">
      <div className="ltl__body">
        <div className="ltl-preview _container">
          <div className="ltl-preview__title">
            <h1 className="ltl-preview__title_text">ЛЕТНИЕ ТВОРЧЕСКИЕ ЛАБОРАТОРИИ 2021</h1>
          </div>
          <div className="ltl-preview__info">
            <span className="ltl-preview__info_text">Летняя творческая лаборатория – это десятидневные программы, которые займут вашего ребенка на целый день. Каждая программа уникальна по своему содержанию и ежегодно обновляется с учетом новых интересов детей.</span>
          </div>
        </div>
        <div className="ltl-shedule _container">
            <div className="ltl-shedule__title">
              <span className="ltl-shedule__title_text">Режим дня</span>
            </div>
            <div className="ltl-diagram">
              <ul className="ltl-diagram__list">
                  {list}
              </ul>
            </div>
        </div>
        <div className="ltl-advertising ">
          <div className="ltl-advertising__text _container">
            <span className="ltl-advertising__text_value">8 часов мастер-классов, квестов и других активностей всего за 800 рублей в день!</span>
          </div>
        </div>
        <div className="ltl-clubs">
          <div className="ltl-clubs__body _container">
            <ul className="ltl-clubs__list">
              {clubsList}
            </ul>
          </div>
        </div>
        <div className="ltl-discont">
          <div className="ltl-discont__body _container">
            <div className="ltl-discont__title">
              <h2 className="ltl-discont__title_text">Возможные скидки</h2>
            </div>
            <div className="ltl-discont__subtitle">
              <h2 className="ltl-discont__subtitle_text">У Вас есть возможность сэкономить и получить скидку:</h2>
            </div>
            <div className="ltl-discont-info">
              <div className="ltl-discont-info__body">

              <LTLDiscontBlock 
                number='10'
                text='Если Вы являетесь многодетной/малоимущей семьей или ребенок имеет инвалидность.'
                subText='Если Вы приводите ребенка на вторую летнюю программу (первая программа оплачивается полностью).'
              />

              <LTLDiscontBlock 
                number='20'
                text='Если Вы записываете на программы двоих или более детей из одной семьи (в этом случае первый ребёнок идёт за полную стоимость, остальные со скидкой).'
              />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ltl
