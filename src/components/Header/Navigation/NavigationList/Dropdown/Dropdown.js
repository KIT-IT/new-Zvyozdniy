import React from 'react';
import { Link } from "react-router-dom";

const Dropdown = ({id, text, to, handleClick, mobile}) => {

return (
    <li key={id} className="dropdown-list__item">
        <Link to={to} className="dropdown-list__item_link" onClick={handleClick}>
            <span className="dropdown-list__item_text element-with-changing-styles"
                  style={{color: mobile ? 'black' : ''}}>{text}</span>
        </Link>
    </li>
)
}

export default Dropdown;