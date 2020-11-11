import React from 'react'
import './Contacts.scss'
import ContactsItem from './contactsItem/ContactsItem'
import { contactsData } from '../../../configurations/aboutHistoryConfig'

function Contacts() {
    const list = contactsData.map(item => {
        return (
            <ContactsItem 
                key={item.id}
                title={item.title}
                srcImg={item.srcImg}
                altImg={item.altImg}
                srcToMap={item.srcToMap}
                arddressTitle={item.arddressTitle}
                ardressText={item.arddressText}
                worktimeTitle={item.worktimeTitle}
                worktimeText={item.worktimeText}
                phoneTitle={item.phoneTitle}
                phoneText={item.phoneText}
            />
        )
    })

    return (
        <>
         <div className="contacts">
            <div className="contacts__body _container">
               <div className="contacts__title _title">Контакты</div>
                <ul className="contacts-list">
                    {list}
                </ul>
               <div className="contacts-links">
               </div>
            </div>
         </div>
      </>
    )
}

export default Contacts


