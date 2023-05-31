import React from 'react'
import { ltlClubConfig, ltlConfig } from '../../configurations/leto2022/ltlConfig'
import LtlClubComponent from './Ltl/LtlClubComponent'
import LTLDiagram from './Ltl/LtlDiagram'
import LTLDiscontBlock from './Ltl/LtlDiscountBlock'

function Ltl() {
  const list = ltlConfig.map(item => {
    return (
      <LTLDiagram key={item.id} date={item.time} title={item.title} description={item.description}/>
    )
  })

  const clubsList = ltlClubConfig.map(item => {
    return (
      <LtlClubComponent 
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
        iconList={item.icon.map(elem => {return <img key={elem.id} src={elem.src} alt='decor' style={{width: elem.size}} className={elem.className}/>})}
        daysOff={item.daysOff}
        group={item.group}
        leaders={item.leaders}
        extra={item.extra}
      />
    )
  })

  



  return (
    <div className="ltl wrapper">
      <div className="ltl__body">
        <div className="ltl-preview _container">
          <div className="ltl-preview__title">
            <h1 className="ltl-preview__title_text">ЛЕТНИЕ ТВОРЧЕСКИЕ ЛАБОРАТОРИИ 2022</h1>
          </div>
          <div className="ltl-preview__info">
            <span className="ltl-preview__info_text">Летняя творческая лаборатория – это десятидневные программы, которые займут вашего ребенка на целый день. Каждая программа уникальна по своему содержанию и ежегодно обновляется с учетом новых интересов детей. Каждый день участников летней творческой лаборатории ждут интеллектуальные, творческие, развлекательные активности, которые позволяют ребенку раскрыться и при этом попробовать для себя что – то новое.</span>
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

export default Ltl;