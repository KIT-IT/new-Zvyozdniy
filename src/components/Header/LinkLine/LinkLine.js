import React from 'react';
import './LinkLine.scss'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faVk } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


const LinkLine = ({cls}) =>  (
    <div className="link-line">
        <ul className="link-line-list">
            <li className="link-line-list__item">
                <Link className="link-line-list__item_link" to={'/'}>
                    <FontAwesomeIcon className={cls} icon={faFacebookF} />
                </Link>
            </li>
            <li className="link-line-list__item">
                <Link className="link-line-list__item_link" to={'/'}>
                    <FontAwesomeIcon className={cls} icon={faVk} />
                </Link>
            </li>
            <li className="link-line-list__item">
                <Link className="link-line-list__item_link" to={'/'}>
                    <FontAwesomeIcon className={cls} icon={faInstagram} />
                </Link>
            </li>
            <li className="link-line-list__item">
                <Link className="link-line-list__item_link" to={'/'}>
                    <FontAwesomeIcon className={cls} icon={faTwitter} />
                </Link>
            </li>
        </ul>
    </div>
)

export default LinkLine;