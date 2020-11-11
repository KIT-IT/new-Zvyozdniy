import React from 'react'
import './Footer.scss'
import LinkLine from "../Header/LinkLine/LinkLine"
import logo from '../../assets/images/linkIcons/logo.png'
import { footerLinksConfig } from '../../configurations/footerLinksConfig'
import {Link} from 'react-router-dom'


function Footer() {

    return (
        <div className="footer">
            <div className="footer-body _container">
                <div className="footer-nav">
                    <ul className="footer-nav__list">
                        { footerLinksConfig.map(i => {
                            return (
                            <li className="footer-nav__list_item" key={i.id}>
                                <Link className="footer-nav__list_item-link" to={i.to}>{i.name}</Link>
                            </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="footer-logo">
                    <img className="footer-logo__img" src={logo} alt="logo-zvz"/>
                </div>
                <div className="footer-link">
                    <LinkLine />
                </div>
            </div>
        </div>
    );
}

export default Footer;