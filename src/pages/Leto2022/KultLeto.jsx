import React from 'react'
import { kultLetoList } from '../../configurations/leto2022/kultLeto'
import KultLetoItem from './KultLeto/KultLetoItem'

function Kultleto() {
  const list = kultLetoList.map(item => {
    return (
      <KultLetoItem 
        key={item.id}
        name={item.name}
        sub={item.subscribe}
        date={item.date}
        age={item.age}
        shedule={item.shedule}
        duration={item.duration}
        price={item.price}
        location={item.loacation}
        maxNum={item.maxNumberMembers}
        img={item.img}
      />
    )
  })


  return (
    <div className="kult wrapper">
      <div className="kult__body">
        <div className="kult-info _container">
          <div className="kult-info__title">
            <h2 className="kult-info__title_text">КУЛЬТЛЕТО 2023</h2>
          </div>
          <div className="kult-info__subscribe">
            <span className="kult-info__subscribe_text">КУЛЬТЛЕТО – это интенсивные программы, рассчитанные на 1 час. Каждая программа уникальна тем, что ребята за короткий отрезок времени осваивают новые навыки, которые в дальнейшем смогут закрепить на занятиях в клубных формированиях домов культуры «Звёздный» и «Юбилейный» в новом творческом сезоне.</span>
          </div>  
        </div>
        <div className="kult-program _container">
          <div className="kult-program__title">
            <span className="kult-program__title_text _subtitle">Летние программы КУЛЬТЛЕТО:</span>
          </div>
          <div className="kult-program__programs">
            <ul className="kult-program__programs_list">
              {list}
            </ul>
          </div>
        </div>
        <div className="kult-signUp ">
          <div className="kult-signUp__body _container">
            <div className="kult-signUp__title">
              <span className="kult-signUp__title_text">Записаться на интенсив:</span>
            </div>
            <div className="kult-signUp-button">
              <div className="kult-signUp-button__body button">
                <a className="kult-signUp-button__body_link" href='https://docs.google.com/forms/d/e/1FAIpQLScWqpwt7K-k5Ir55PAtiEMkrqWRBTGefNNZAPHf2JtaE96xNQ/viewform' target="_blank" rel="noopener noreferrer">
                  <span className="kult-signUp-button__body_text">Запись</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kultleto;