import React from 'react'
import { documentsData } from '../../../configurations/aboutPageConfigurations/documentsConfig'
import Accordion from '../../../components/Accordion/Accordion'
import PagePreview from "../../../components/PagePrewievImageNavigation/PagePreview";

function Documents() {
   return (
         <div className="documents wrapper">
            <PagePreview
                title={"Правовая Информация"}
                backgroundImage={require("../../../assets/images/backgroundImages/documentsBackground.jpg")}
                isNested={true}
                secondPageName={"Документы"}
            />
            <div className="documents__body _container">
               <div className="documents-header _content">
                  {/*<h1 className="documents-header__title _title">Правовая Информация</h1>*/}
                  <ul className="documents-header__info-list">
                     <li className="documents-header__info-list_text">Полное название:  Структурное подразделение Государственного Бюджетного Учреждения «Центр Досуга и Спорта» Структурное Подразделение «Дом культуры «Звездный» (СГБУ «ЦДС ТиНАО» СП «Дом культуры «Звездный»)</li>
                  </ul>
               </div>
               <Accordion
                  accordionConfig={documentsData}
                  isDocs={true} 
                  isList={true}
               />
            </div>
         </div>
   )
}

export default Documents
