import React from 'react'
import './Questions.scss'
import Accordion from '../../../components/Accordion/Accordion'
import { questionsSignUpData,questionsFirstVisitData,questionsPaymentData,questionEventsData } from '../../../configurations/aboutHistoryConfig'
 
function Questions() {
    return (
          <div className="questions wrapper">
              <div className="questions__body _container">
                    <div className="questions__title">
                          <h1 className="_title">Ответы на часто возникающие вопросы</h1>
                    </div>
                    <div className="questions__block">
                      <div className="questions__block_title">
                          <h2 className="_subtitle">Запись в студии</h2>
                      </div>
                      <Accordion dataConst={questionsSignUpData} isDocs={false} isList={false}/>
                    </div>
                    <div className="questions__block">
                      <div className="questions__block_title">
                          <h2 className="_subtitle">Первое посещение ДК</h2>
                      </div>
                      <Accordion dataConst={questionsFirstVisitData} isDocs={false} isList={false}/>
                    </div>
                    <div className="questions__block">
                      <div className="questions__block_title">
                          <h2 className="_subtitle">Всё об оплате занятий</h2>
                      </div>
                      <Accordion dataConst={questionsPaymentData} isDocs={false} isList={false}/>
                    </div>
                    <div className="questions__block">
                      <div className="questions__block_title">
                          <h2 className="_subtitle">Мероприятия</h2>
                      </div>
                      <Accordion dataConst={questionEventsData} isDocs={false} isList={false}/>
                    </div>
              </div>
          </div>
    )
}

export default Questions
