import React from 'react';

const Dropdown = (props) => (
    <li key={props.id} className="dropdown-list__item">
        <a href={props.to} className="dropdown-list__item_link">
            <span className="dropdown-list__item_text">{props.text}</span>
        </a>
    </li>
)

export default Dropdown;