import React, {useState} from 'react'
import { CSSTransition } from 'react-transition-group'
import Icons from '../../../../../components/Icon/Icon'

function LetoProgramElem({name, addClass, textValue, numberValue}) {
  const [showText, setShowText] = useState(false)

  return (
    <> 
    <li className={"test-block-item" + addClass} onMouseEnter={() => setShowText(true)} onMouseLeave={() => setShowText(false)}>
      <div className="test-block-item__icon">
        <Icons className="test-block-item__icon_ico" name={name} size="30" color="#3b3b3b"/>
      </div>
    </li>
    {
      <CSSTransition in={showText} timeout={2000} classNames="show-text" unmountOnExit>
        <div className="test-block-item__text">
          <span className="test-block-item__text_number">{numberValue}</span>
          <span className="test-block-item__text_value">{textValue}</span>
        </div>
      </CSSTransition>
    }
    </>
  )
}

export default LetoProgramElem
