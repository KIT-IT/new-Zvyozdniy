import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import PlusToMinus from "../../../PlusToMinus/PlusToMinus";


function NavigationList({dropdown, id, text, to, isIcon, isDrop, mobile, handleClick }) {
    const [drop, setDrop] = useState(false)

    const handleDropdown = () => {
        setDrop(prev => !prev)
    }

    return (
        mobile
            ? <li key={id} className="navigation-item">
                <div className="navigation-item-mobile-version">
                    <Link to={to} className="navigation-item-mobile-version__link" onClick={handleClick}>
                        <span className="navigation-item-mobile-version__link_text">{text}</span>
                    </Link>
                    <div className="navigation-item-mobile-version__icon">
                        {
                            isDrop
                                ? isDrop && drop
                                ? <PlusToMinus cl={"opened"} click={handleDropdown}/>
                                : <PlusToMinus cl={"closed"} click={handleDropdown}/>
                                : null
                        }
                    </div>
                </div>
                {
                    drop
                    ? <div className="dropdown">
                            <ul>
                                {dropdown}
                            </ul>
                        </div>
                    : null
                }
                </li>
            : <li onMouseEnter={handleDropdown} onMouseLeave={handleDropdown} key={id} className="navigation-item">
                <div className="navigation-item__body">
                    <Link to={to} className="navigation-item__link">
                        <div className="navigation-item__link_text">{text}</div>
                        <div className="navigation-item__link_icon">
                            { isIcon ? <FontAwesomeIcon icon={faAngleDown} className="navigation-item__link_icon" color='#3b3b3b'/> : null }
                        </div>
                    </Link>
                    {
                        isDrop && drop
                        ? <div className="dropdown">
                            <div className="dropdown-body element-with-changing-styles">
                                <ul className="dropdown-list">
                                    {dropdown}
                                </ul>
                            </div>
                            </div>
                        : null
                    }
                </div>
              </li>
    );
}

export default NavigationList;