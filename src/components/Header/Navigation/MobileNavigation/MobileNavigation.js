import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import zvzLogo from '../../../../assets/images/logo.png'

function MobileNavigation({ list, click, setClick, handleFormOpen }) {
    const [mobilePhoneWidth, setMobilePhoneWidth] = useState(false)

    const handleMobilePhoneWidth = () => {
        if (window.innerWidth <= 620) {
            setMobilePhoneWidth(true)
        } else {
            setMobilePhoneWidth(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleMobilePhoneWidth)
        handleMobilePhoneWidth()
        return () => {
            window.removeEventListener('resize', handleMobilePhoneWidth)
        }
    }, [])


    return (
        <div className="header-mobile-version">
            <div className="header-mobile-version-menu">
                <div className="header-mobile-version-menu__body _container">
                    <div className="header-mobile-version-menu__main">
                        <div className="header-mobile-version-menu__main_icon">
                            <div id="menuToggle" onClick={() => setClick(!click)}>
                                <input type="checkbox" id="checkbox"/>
                                <span id="span1"></span>
                                <span id="span2"></span>
                                <span id="span3"></span>
                            </div>

                        </div>
                        <div className="header-mobile-version-menu__main_logo">
                            <Link to="/">
                                <img className="header-mobile-version-menu__main_logo-img" src={zvzLogo} alt="logo-zvz"/>
                            </Link>
                        </div>
                    </div>
                    {
                        mobilePhoneWidth
                            ? null
                            : <div className="header-mobile-version-menu__links">
                                <div className="header-mobile-version-menu__links_phone">
                                    <a className="header-mobile-version-menu__links_phone-number" href="tel:+74958508053">+7 (495) 850-80-53</a>
                                </div>
                                <div className="header-mobile-version-menu__links_form">
                                    <button className="header-mobile-version-menu__links_form-button button element-with-changing-styles" onClick={handleFormOpen}>
                                        <span className="header-mobile-version-menu__links_form-text">Обратная связь</span>
                                    </button>
                                </div>
                              </div>

                    }
                </div>
            </div>
            {
                click
                    ?  <div className="mobile-navigation">
                            <div className="mobile-navigation__body">
                                <ul className="mobile-navigation__list">
                                    {list}
                                </ul>
                                <div className="mobile-navigation__form-link">
                                    <button className="header-mobile-version-menu__links_form-button button element-with-changing-styles" onClick={handleFormOpen}>
                                        <span className="header-mobile-version-menu__links_form-text">Обратная связь</span>
                                    </button>
                                </div>
                                <div className="mobile-navigation__phone-link">
                                    <a className="header-mobile-version-menu__links_phone-number" href="tel:+74958508053">+7 (495) 850-80-53</a>
                                </div>
                            </div>
                       </div>
                    : null
            }
        </div>
    )
}

export default MobileNavigation
