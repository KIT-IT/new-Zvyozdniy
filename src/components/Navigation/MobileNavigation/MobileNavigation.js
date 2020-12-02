import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEquals} from "@fortawesome/free-solid-svg-icons"
import {faTimes} from "@fortawesome/free-solid-svg-icons"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import zvzLogo from '../../../assets/images/logo.png'

function MobileNavigation({ list, click, handleClick}) {
    return ( 
            <div className="mobile-menu">
                {
                  click 
                    ? <div className="mobile-navigation">
                        <div className="mobile-navigation__icon">
                            <FontAwesomeIcon className="quitIcon icon" icon={faTimes} onClick={handleClick} />
                        </div>
                        <ul className="mobile-navigation__list">
                            {list}
                        </ul> 
                      </div>
                    : <div className="mobile-menu__body">
                        <div className="mobile-menu__icon">
                            <FontAwesomeIcon icon={faEquals} color={'black'} onClick={handleClick}/>
                        </div>
                        <div className="mobile-menu__logo">
                            <Link to="/">
                                <img className="mobile-menu__logo_img" src={zvzLogo} alt="logo-zvz"/>
                            </Link>
                        </div> 
                        <div className="mobile-menu__search">
                            <FontAwesomeIcon icon={faSearch}  color={'#3b3b3b'}/>
                        </div>
                      </div>
                }
            </div>
        
    )
}

export default MobileNavigation
