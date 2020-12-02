import React, {useState, useEffect} from 'react';
import './Navigation.scss'
import {navList} from "../../configurations/navLinkConfig"
import Dropdown from "./Dropdown/Dropdown"
import NavigationList from "./NavigationList/NavigationList"
import MobileNavigation from './MobileNavigation/MobileNavigation'
// import {Link} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faEquals} from "@fortawesome/free-solid-svg-icons"
// import {faTimes} from "@fortawesome/free-solid-svg-icons"
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import zvzLogo from '../../assets/images/linkIcons/logo.png'


function Nav() {
    const [mobile, setMobile] = useState(false)
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const handleMobileMenu = () => {
        if (window.innerWidth <= 770) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleMobileMenu)
        handleMobileMenu()
        return () => {
            window.removeEventListener('resize', handleMobileMenu)
        }
    }, [])

    const list = navList.map(item => {
        return (
            <NavigationList
                to={item.to}
                text={item.text}
                key={item.id}
                isIcon={item.isIcon}
                src={item.src}
                isDrop={item.isDrop}
                dropdown={
                    item.drop.map(i => {
                        return (
                            <Dropdown
                                text={i.text}
                                to={i.to}
                                key={i.id}
                            />
                        )
                    })
                }
                mobile={mobile}
            />
        )
    })


    return (
            <nav className="nav-body _container">
                {mobile 
                  ? <MobileNavigation list={list} click={click} handleClick={handleClick} setClick={setClick}/>
                  : <ul className="nav-list">{list}</ul>
                } 
                
                {/* {
                    mobile 
                    ? <div className="mobile-menu">
                        {
                          click 
                            ? <div className="mobile-navigation">
                                <ul className="mobile-navigation__list">
                                    {list}
                                </ul> 
                                <div className="mobile-navigation__icon">
                                    <FontAwesomeIcon className="quitIcon" icon={faTimes} onClick={handleClick}/>
                                </div>
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
                         { // Этот кусок кода не нужен! Вставил вывод мобильной навигации в прверку в начале!
                            click 
                                ? <div className="mobile-navigation">
                                    <ul className="mobile-navigation__list">
                                        {list}
                                    </ul> 
                                    <div className="mobile-navigation__icon">
                                        <FontAwesomeIcon className="quitIcon" icon={faTimes} onClick={handleClick}/>
                                    </div>
                                  </div>
                                : null
                        } 
                       </div>
                    : <ul className="nav-list">{list}</ul>
                } */}
            </nav>
    );
}
 
export default Nav;