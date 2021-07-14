import React, {useState} from 'react'
import { CSSTransition } from 'react-transition-group'
import Icons from '../../../components/Icon/Icon'

function LTLDiscontBlock({number, text, subText = null}) {
  const [dropedText, setDropedText] = useState(false)

  return (
    <div className="ltl-discont-block">
      <div className="ltl-discont-block__toggle" onClick={() => setDropedText(!dropedText)}>
        <span className="ltl-discont-block__toggle_number">{number}</span>
        <Icons className="ltl-discont-block__toggle_icon" name="sale" size="100" />
      </div>

        <CSSTransition in={dropedText} timeout={1000} classNames="droped-text" unmountOnExit>
          <div className="ltl-discont-block__dropped-content">
            <div className="ltl-discont-block__dropped-content_text">{text} </div>
            <div className="ltl-discont-block__dropped-content_text">{subText}</div>
          </div>
        </CSSTransition>
    
    </div>
  )
}

export default LTLDiscontBlock
