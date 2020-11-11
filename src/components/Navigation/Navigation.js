import React from 'react';
import './Navigation.scss'
import {navList} from "../../configurations/navLinkConfig";
import Dropdown from "./Dropdown/Dropdown";
import NavigationList from "./NavigationList/NavigationList";


function Nav() {
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
            />
        )
    })

    return (
        <div className="nav">
            <nav className="nav-body _container">
                <ul className="nav-list">
                    {list}
                </ul> 
            </nav>
        </div>
    );
}

export default Nav;