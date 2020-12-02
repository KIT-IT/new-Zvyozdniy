import React, { useState,useEffect } from 'react'
import './Header.scss'
import LinkInfoLine from './LinkInfoLine/LinkInfoLine'

import zvzLogo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";
import Nav from "../Navigation/Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearch, faAngleUp, faGlasses } from '@fortawesome/free-solid-svg-icons'
import VisImpared from './VisImpaired/VisImpared'


function Header() {
    const [visImpared, setVisImpared] = useState(false)
    const [mobileMenu, setMobilemenu] = useState(false)
    const [cls, setCls] = useState("nav")
    const [arrow, setArrow] = useState(false)

    const handleHeader = () => {
        if (window.pageYOffset >= 200) {
            setCls(" fixed")
        } else {
            setCls("nav")
        }
    }

    const handleArrow = () => {
        if (window.pageYOffset >= 500) {
            setArrow(true)
        } else {
            setArrow(false)
        }
    }

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }


    const handleMobileMenu = () => {
        if (window.innerWidth <= 770) {
            setMobilemenu(true)
        } else {
            setMobilemenu(false)
        }
    }

    document.addEventListener('scroll', handleHeader)
    document.addEventListener('scroll', handleArrow)



    useEffect(() => {
        window.addEventListener('resize', handleMobileMenu)

        handleMobileMenu()
        return () => {
           window.removeEventListener('resize', handleMobileMenu)
        }
    }, [])

        const handleImpared = () => {
            setVisImpared(!visImpared)
        }



    return (
        <div>
        { visImpared ? <VisImpared setVisImpared={setVisImpared} visImpared={visImpared}/> : null}
        {
        mobileMenu 
            ? <Nav/>
            : <>
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
                                    <div className="header-info-forms">
                                        <button className="header-info-forms__button button">
                                            <span className="header-info-forms__button_text">Обратная связь</span>
                                        </button>
                                    </div>
                                    <div className="info-glasses" onClick={handleImpared}>
                                        <FontAwesomeIcon  icon={faGlasses} color={'inherit'} style={{fontSize: '15px'}}/>
                                        <p className="info-glasses__text">Версия для слабовидящих</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cls}>
                            <Nav />
                        </div>
                    </div>
                </div>
                {
                    arrow
                     ? <div className="icon-body" onClick={handleScroll}><FontAwesomeIcon className="fixed-icon" icon={faAngleUp} /></div>
                     : null
                }
                </>
            }
        </div>
    );
}

export default Header;