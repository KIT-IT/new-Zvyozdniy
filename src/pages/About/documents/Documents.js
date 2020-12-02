import React from 'react'
import './Documents.scss'
import { docsData } from '../../../configurations/aboutHistoryConfig'
import Accordion from '../../../components/Accordion/Accordion'

function Documents() {
   return (
         <div id="info" className="documents wrapper">
            <div className="documents__body _container">
               <div className="documents-header">
                  <h1 className="documents-header__title _title">Правовая Информация</h1>
                  <ul className="documents-header-info-list">
                     <li className="documents-header-info-list__text">Документы и общая информация о Доме Культуры «Звёздный» на <a className="documents-header-info-list__text_link" href="/"> Официальном сайте для размещения информации о государственных учреждениях</a></li>
                     <li className="documents-header-info-list__text">Полное название: Государственное Бюджетное Учреждение Культуры Дом Культуры «Звёздный»</li>
                     <li className="documents-header-info-list__text">Сокращённое название МБУК ДК «Звёздный»</li>
                     <li className="documents-header-info-list__text">Год создания: 2000</li>
                  </ul>
               </div>
               <Accordion 
                  dataConst={docsData} 
                  isDocs={true} 
                  isList={true}
               />
            </div>
         </div>
   )
}

export default Documents
