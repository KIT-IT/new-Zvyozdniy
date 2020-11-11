import React, { useState } from 'react'
import './Header.scss'
import LinkInfoLine from './LinkInfoLine/LinkInfoLine'

import zvzLogo from '../../assets/images/linkIcons/logo.png'
import {Link} from "react-router-dom";
import Nav from "../Navigation/Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import VisImpared from './VisImpaired/VisImpared'






function Header() {
    const [visImpared, setVisImpared] = useState(false)

    const handleImpared = () => {
        setVisImpared(!visImpared)
    }

    return (
                 <div>
                    { visImpared ? <VisImpared/> : null}
                    <LinkInfoLine />
                    <div className="header-main">
                        <div className="header-main-body _container">
                            <div className="header-info">
                                <div className="header-info-body">
                                    <div className="header-info-logo">
                                        <Link to="/">
                                            <img className="header-info-logo__img" src={zvzLogo} alt="logo-zvz"/>
                                        </Link>
                                    </div>
                                    <div className="header-info-search">
                                          <FontAwesomeIcon className="header-info-search__img icon" icon={faSearch}  color={'#3b3b3b'}/>
                                        <input type="text" className="header-info-search__input" placeholder="Поиск по сайту"/>
                                    </div>
                                    <div className="header-info-contacts">
                                        <div className="header-info-phones">
                                            <FontAwesomeIcon className='icon' icon={faPhoneAlt} />
                                            <a className="header-info-phones__link" href="tel:+74958508053">+7 (495) 850-80-53</a>
                                        </div>
                                        <div className="header-info-forms">
                                            <button className="header-info-forms__button button">
                                                <span className="header-info-forms__button_text">Обратная связь</span>
                                            </button>
                                        </div>
                                        <div className="info-glasses" onClick={handleImpared}>
                                            <FontAwesomeIcon className='icon' icon={faGlasses} color={'black'}/>
                                            <p className="info-glasses__text">Версия для слабовидящих</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-nav">
                                <Nav />
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default Header;