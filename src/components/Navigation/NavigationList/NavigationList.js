import React, { useState} from 'react';
import {Link} from "react-router-dom";
import arrowDownLogo from '../../../assets/images/linkIcons/down-arrow.svg'

function NavigationList({dropdown, id, text, to, isIcon, isDrop}) {
    const [ok, setOk] = useState(false)

    const handleDropdown = () => {
        setOk(!ok)
    }



    return (
        <li onMouseEnter={handleDropdown} onMouseLeave={handleDropdown} key={id} className="nav-item">
            <Link to={to} className="nav-item__link">
                <span className="nav-item__link_text">{text}</span>
                {
                    isIcon
                        ? <img className="nav-item__link_img" src={arrowDownLogo} alt="icon"/>
                        : null
                }
            </Link>
            {
                isDrop && ok
                    ? <div className="dropdown">
                        <div className="dropdown-body">
                            <ul className="dropdown-list">
                                {dropdown}
                            </ul>
                        </div>
                    </div>
                    : null
            }
        </li>
    );
}

export default NavigationList;