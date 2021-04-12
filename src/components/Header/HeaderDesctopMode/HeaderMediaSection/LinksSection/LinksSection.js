import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { linksConfig } from "../../../../../configurations/linksSectionConfiguration/linksConfig";


const LinksSection = ({ cls, color, id }) =>  {
    const list = linksConfig.map((item,index ) => {
        const handleIconColor = () => {
            const icons = document.querySelectorAll(`#${id}`)
            icons.forEach((elem,index) =>  {
                if (index === item.key) {
                    elem.style.color = item.color
                }
            })
        }

        const handleIconColorReturn = () => {
            const icons = document.querySelectorAll(`#${id}`)
            icons.forEach((elem,index) =>  {
                if (index === item.key) {
                    elem.style.color = color
                }
            })
        }

        return (
            <li key={item.key} className="links-section-list__item">
                <a className="links-section-list__item_link" href={item.to} target="_blank" rel="noopener noreferrer">
                    <div className="links-section-list__item_icon">
                        <FontAwesomeIcon id={id} color={color} className={cls} icon={item.icon} onMouseEnter={handleIconColor} onMouseLeave={handleIconColorReturn}/>
                    </div>
                </a>
            </li>
        )
    })


    return (
    <div className="links-section">
        <ul className="links-section-list">
            {list}
        </ul>
    </div>
    )
}

export default LinksSection;