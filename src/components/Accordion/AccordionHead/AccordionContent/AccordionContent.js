import React from 'react'


function AccordinContent({ href, text, isDocs }) {
   return (
      <>
        {isDocs
            ?
              <li className="accordionDropdown-list__item-docs">
                  <a
                     href={href}
                     rel="noopener noreferrer"
                     target="_blank"
                     className="accordionDropdown-list__item-docs_link"
                  >
                  <span className="accordionDropdown-list__item-docs_text">{text}</span>
                  </a>
              </li>
            :  <li className="accordionDropdown-list__item-p">
                  <p className="accordionDropdown-list__item-p_text">{text}</p>               
               </li>}
      </>
   )
}

export default AccordinContent
