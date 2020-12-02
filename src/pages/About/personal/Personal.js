import React from 'react'
import PersonalItem from './PersonalItem'
import { personalData } from '../../../configurations/aboutHistoryConfig'
import './Personal.scss'
import template from '../../../assets/images/pesonalPhoto/template.jpg'

function Personal() {
   const lists = personalData.map(i => {
      return (<PersonalItem
         key={i.id}
         src={i.src || template}
         name={i.name}
         position={i.position}
      />
      )
   })


   return (
         <div id="team" className="personal wrapper">
            <div className="personal__body _container">
               <h1 className="personal__title _title">Наша Команда</h1>
               <div className="personal__list">
                  {lists}
               </div>
            </div>
         </div>
   )
}

export default Personal
