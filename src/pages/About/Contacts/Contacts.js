import React, {useEffect, useState} from 'react'
import ContactsItem from './ContactsItem/ContactsItem'
import { zvyozdniyCultureCenter, contactsSwitchListConfig } from '../../../configurations/aboutPageConfigurations/contactsConfig'
import PagePreview from "../../../components/PagePrewievImageNavigation/PagePreview";

function Contacts() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [contacts, setContacts] = useState(null)
    const handleActiveIndex = index => setActiveIndex(index)
    const contactsSwitchList = contactsSwitchListConfig.map((item,index) =>
            <li key={item.key} onClick={() => setContacts(item.fun)} className="contacts-switch-list__item">
                <p className={activeIndex === index ? "contacts-switch-list__item_active" : null} onClick={() => handleActiveIndex(index)}>{item.name}</p>
            </li>
    )

    useEffect(() => {
        setContacts(
            <ContactsItem
                title={zvyozdniyCultureCenter.title}
                srcToMap={zvyozdniyCultureCenter.srcToMap}
                address={zvyozdniyCultureCenter.address}
                worktime={zvyozdniyCultureCenter.worktime}
                phone={zvyozdniyCultureCenter.phone}
            />
        )
    }, [])

    return (
         <div className="contacts wrapper">
             <PagePreview
                 title={"Контакты"}
                 backgroundImage={require("../../../assets/images/backgroundImages/contactsBackground.jpg")}
                 isNested={true}
                 secondPageName={"Контакты"}
             />
            <div className="contacts__body">
                <div className="contacts-switch-panel">
                    <div className="contacts-switch-panel__body _container">
                        <ul className="contacts-switch-list">
                            { contactsSwitchList }
                        </ul>
                    </div>
                </div>
                { contacts }
            </div>
         </div>
    )
}

export default Contacts