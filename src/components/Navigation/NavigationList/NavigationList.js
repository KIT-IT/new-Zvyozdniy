import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

function NavigationList({dropdown, id, text, to, isIcon, isDrop, mobile}) {
    const [drop, setDrop] = useState(false)

    const handleDropdown = () => {
        setDrop(prev => !prev)
    }
    
    return (
            //! Укороченная реализация но кривая из-за родительского li!
            // <li onMouseEnter={handleDropdown} onMouseLeave={handleDropdown} key={id} className="nav-item">
            //     <Link to={to} className="nav-item__link">
            //         <span className="nav-item__link_text">{text}</span>
            //     </Link>
            //     {
            //           mobile 
            //             ? <div className="mobile-plus-icon">{isDrop ? drop ?<FontAwesomeIcon icon={faMinus} onClick={handleDropdown}/> :<FontAwesomeIcon icon={faPlus} onClick={handleDropdown} size={'1x'}/> : null}</div> 
            //             : isIcon ? <img className="nav-item__link_img" src={arrowDownLogo} alt="icon"/> : null
            //     }
            //     {
            //       isDrop && drop
            //         ? <div className="dropdown">
            //             <div className="dropdown-body">
            //                 <ul className="dropdown-list">
            //                     {dropdown}
            //                 </ul>
            //             </div>
            //           </div>
            //         : null
            //     }
            // </li>
        mobile 
            ? <li key={id} className="nav-item">
                <div className="nav-item-mobile">
                    <Link to={to} className="nav-item__link">
                        <span className="nav-item__link_text">{text}</span>
                    </Link>
                    <div className="mobile-plus-icon">{isDrop ? isDrop && drop ?<FontAwesomeIcon icon={faMinus} onClick={handleDropdown} color="darkred"/> :<FontAwesomeIcon icon={faPlus} onClick={handleDropdown} size={'1x'}/> : null}</div> 
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
            : <li onMouseEnter={handleDropdown} onMouseLeave={handleDropdown} key={id} className="nav-item">
                <div className="nav-item__body">
                    <Link to={to} className="nav-item__link">
                        <span className="nav-item__link_text">{text}</span>
                        { isIcon ? <FontAwesomeIcon icon={faAngleDown} className="nav-item__link_img" color='#3b3b3b'/> : null }
                    </Link>
                    {
                        isDrop && drop
                        ? <div className="dropdown">
                            <div className="dropdown-body">
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