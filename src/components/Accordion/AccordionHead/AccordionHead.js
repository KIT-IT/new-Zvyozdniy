import React, { useState } from 'react'


function AccordionHead({ drop, title, isList }) {
   const [isDrop, setisDrop] = useState(false)

   const handelDropdown = () => {
      setisDrop(!isDrop)
   }
   return (
      <>
         <li className="accordion-list__item" >
            <div onClick={handelDropdown} className={!isDrop ? "default" : "pushed"}>
               <span className="accordion-list__item_text">{!isDrop ? title : 'Выйти'}</span>
            </div>
            {
               isDrop
                  ? <div className="accordionDropdown">
                     <div className="accordionDropdown__body">
                         { isList  
                              ? <ul className="accordionDropdown-list">
                                    {drop}
                                 </ul>
                              : <div className="accordioDropdown-paragraf">{drop}</div> 
                         }
                     </div>
                  </div>
                  : null
            }
         </li>
      </>
   )
}

export default AccordionHead
