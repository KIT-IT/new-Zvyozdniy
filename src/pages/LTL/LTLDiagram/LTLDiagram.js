import React from 'react'
import Icons from '../../../components/Icon/Icon'

function LTLDiagram({date, title, description}) {
  return (
    <li className="ltl-diagram-item">
      <div className="ltl-diagram-item__body">
        <div className="ltl-diagram-item__date">
          <div className="ltl-diagram-item__date_text">{date}</div>
        </div>
        <div className="ltl-diagram-item__info">
          <div className="ltl-diagram-item__info_title">{title}</div>
          <div className="ltl-diagram-item__info_description">{description}</div>
          <Icons className="ltl-diagram-item__info_icon" name="wave" size="34" color="#3b3b3b"/>
        </div>
      </div>
    </li>
  )
}

export default LTLDiagram
