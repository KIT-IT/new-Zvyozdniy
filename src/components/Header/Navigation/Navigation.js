import React, {useState, useEffect} from 'react';
import {navList} from "../../../configurations/navigationLInksConfigurations/navLinkConfig"
import Dropdown from "./NavigationList/Dropdown/Dropdown"
import NavigationList from "./NavigationList/NavigationList"
import MobileNavigation from './MobileNavigation/MobileNavigation'

function Navigation({navigationClass, handleFormOpen}) {
    const [mobile, setMobile] = useState(false)
    const [click, setClick] = useState(false)
    const input  = document.querySelector('#checkbox')

    const handleClick = () => {
        setClick(!click)
        if (mobile) {
            input.checked = false
        }
    }

    const handleMobileMenu = () => {
        if (window.innerWidth <= 900) {
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
                isDrop={item.isDrop}
                handleClick={handleClick}
                dropdown={
                    item.drop.map(i => {
                        return (
                            <Dropdown
                                text={i.text}
                                to={i.to}
                                key={i.id}
                                handleClick={handleClick}
                                mobile={mobile}
                            />
                        )
                    })
                }
                mobile={mobile}
            />
        )
    })

    return (
            mobile
             ? <MobileNavigation list={list} click={click} handleClick={handleClick} setClick={setClick} handleFormOpen={handleFormOpen} />
             : <nav className="navigation__body">
                    { navigationClass === 'fixed-navigation'
                        ? <ul className="navigation-list _container">{list}</ul>
                        : <ul className="navigation-list">{list}</ul>
                    }
               </nav>

    );
}
 
export default Navigation;