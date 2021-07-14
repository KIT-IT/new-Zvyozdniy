import React from 'react'
import { Link } from 'react-router-dom'

function LetoProgram({title, subtitle, list, to}) {
  return (
    <div className="leto-program">
      <div className="leto-program__body _content">
        <div className="leto-program__title">
          <span className="leto-program__title_text">{title}</span>
        </div>
        <div className="leto-program__subtitle">
          <span className="leto-program__subtitle_text">{subtitle}</span>
        </div>

        <div className="test-block">
          <div className="test-block__body">
            <ul className="test-block__list">
              {list}
            </ul>
          </div>
        </div>
        <div className="leto-program-button">
          <div className="leto-program-button__body button">
            <Link className="leto-program-button__link" to={to}>
              <span className="leto-program-button__link_text">Подробнее</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LetoProgram
