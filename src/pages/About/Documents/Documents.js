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
                     <li className="documents-header__info-list_text">Документы и общая информация о Доме Культуры «Звёздный» на <a className="documents-header__info-list_link" href="/"> Официальном сайте для размещения информации о государственных учреждениях</a></li>
                     <li className="documents-header__info-list_text">Полное название: Муниципальное Бюджетное Учреждение Культуры Дом Культуры «Звёздный»</li>
                     <li className="documents-header__info-list_text">Сокращённое название МБУК ДК «Звёздный»</li>
                     <li className="documents-header__info-list_text">Год создания: 2000</li>
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
