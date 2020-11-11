import React from 'react';
import './LinkLine.scss'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faVk } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


const LinkLine = () =>  (
    <div className="link-line">
        <ul className="link-line-list">
            <li className="link-line-list__item">
                <Link className="link-line-list__item_link" to={'/'}>
                    <FontAwesomeIcon className='icon' icon={faFacebookF} />
                </Link>
            </li>
            <li className="link-line-list__item">
                <Link className="link-line-list__item_link" to={'/'}>
                    <FontAwesomeIcon className='icon' icon={faVk} />
                </Link>
            </li>
            <li className="link-line-list__item">
                <Link className="link-line-list__item_link" to={'/'}>
                    <FontAwesomeIcon className='icon' icon={faInstagram} />
                </Link>
            </li>
            <li className="link-line-list__item">
                <Link className="link-line-list__item_link" to={'/'}>
                    <FontAwesomeIcon className='icon' icon={faTwitter} />
                </Link>
            </li>
        </ul>
    </div>
)

export default LinkLine;