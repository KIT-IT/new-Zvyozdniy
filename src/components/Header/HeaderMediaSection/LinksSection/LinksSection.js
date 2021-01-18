import React from 'react';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {linksConfig} from "../../../../configurations/linksSectionConfiguration/linksConfig";


const LinksSection = ({cls, color, id}) =>  {
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
                <Link className="links-section-list__item_link" to={item.to}>
                    <div className="links-section-list__item_icon">
                        <FontAwesomeIcon id={id} color={color} className={cls} icon={item.icon} onMouseEnter={handleIconColor} onMouseLeave={handleIconColorReturn}/>
                    </div>
                </Link>
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