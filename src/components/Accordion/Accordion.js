import React from 'react'
import AccordionHead from './AccordionHead/AccordionHead'
import AccordionContent from './AccordionHead/AccordionContent/AccordionContent'
import './Accordion.scss'

function Accordion({dataConst, isList, isDocs}) {
    const list = dataConst.map(item => {
        return (
            <AccordionHead
               key={item.id}
               title={item.text}
               isList={isList}
               drop={
                  item.drop.map(i => {
                      return (
                        isList 
                            ? <AccordionContent
                                key={i.id}
                                text={i.text}
                                href={i.href}
                                isDocs={isDocs}
                                />
                            : <p key={i.id} className="accordioDropdown-paragraf__item">{i.text}</p>
                      )
                  })
               }
            />
         )
    })

    return (
        <div className="accordion">
            <div className="accordion__body _container">
                <ul className="accordion-list">
                    {list}
                </ul>
            </div>
        </div>
    )
}

export default Accordion
