import React, {useState, useEffect} from 'react'
import HeaderMediaSection from './HeaderMediaSection/HeaderMediaSection'
import zvzLogo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faGlasses } from '@fortawesome/free-solid-svg-icons'
import VisualImpairedSection from './VisualImpairedSection/VisualImpairedSection'
import Form from "../Form/Form";
import SearchingInput from "../SearchingInput/SearchingInput";


function Header() {
    const [visualImpaired, setVisualImpaired] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [arrow, setArrow] = useState(false)
    const [navigationClass, setNavigationClass] = useState("navigation")
    const [form, setForm] = useState(false)

    const handleMobileHeader = () => {
        if (window.pageYOffset >= 400) {
            setNavigationClass("fixed-navigation")
        } else {
            setNavigationClass("navigation")
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
        if (window.innerWidth <= 900) {
            setMobileMenu(true)
        } else {
            setMobileMenu(false)
        }
    }

    const handleFormOpen = () => {
        setForm(true)
        document.body.style.overflow = "hidden"
    }

    const handleFormClose = (e) => {
        if (e.target.className === "form-wrapper" || e.target.getAttribute('id') === "form-close") {
            setForm(false)
            document.body.style.overflow = "visible"
        }
    }




    useEffect(() => {
        window.addEventListener('resize', handleMobileMenu)
        document.addEventListener('scroll', handleArrow)
        document.addEventListener('scroll', handleMobileHeader)
        handleMobileMenu()
        return () => {
            window.removeEventListener('resize', handleMobileMenu)
            document.removeEventListener('scroll', handleArrow)
            document.removeEventListener('scroll', handleMobileHeader)
        }
    }, [])

        const handleImpaired = () => {
            setVisualImpaired(true)
            if (visualImpaired) {
                const imp = document.querySelector('.visual-impaired')
                imp.classList.toggle('hide-visual-impaired-panel')
            }
        }


    return (
        <div className="con">
          { form ? <Form title={"Ваше сообщение"} isPopup={true} handleFormClose={handleFormClose}/> : null}
          { visualImpaired ? <VisualImpairedSection setVisualImpaired={setVisualImpaired} visualImpaired={visualImpaired}/> : null}
          {
           mobileMenu
            ? <Navigation handleFormOpen={handleFormOpen}/>
            : <div className="header element-with-changing-styles">
                <HeaderMediaSection />
                <div className="header-main ">
                    <div className="header-main-body _container">
                        <div className="header-info">
                            <div className="header-info-body">
                                <div className="header-info-logo">
                                    <Link to="/">
                                        <img className="header-info-logo__img" src={zvzLogo} alt="logo-zvz"/>
                                    </Link>
                                </div>

                                <SearchingInput />

                                <div className="header-info-contacts">
                                    <div className="info-glasses" onClick={handleImpaired}>
                                        <FontAwesomeIcon className="element-with-changing-styles"  icon={faGlasses} color={'#fff'} style={{fontSize: '15px'}}/>
                                        <p className="info-glasses__text">Версия для слабовидящих</p>
                                    </div>
                                    <div className="header-info-forms">
                                        <button className="header-info-forms__button button element-with-changing-styles" onClick={handleFormOpen}>
                                            <span className="header-info-forms__button_text">Обратная связь</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={navigationClass}>
                            <Navigation navigationClass={navigationClass} />
                        </div>
                    </div>
                </div>
                {
                    arrow
                     ? <div className="icon-body" onClick={handleScroll}><FontAwesomeIcon className="fixed-icon" icon={faAngleUp} /></div>
                     : null
                }
               </div>
            }
        </div>
    );
}

export default Header;