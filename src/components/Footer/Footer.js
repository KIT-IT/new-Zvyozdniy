import React from 'react'
import './Footer.scss'
import LinkLine from "../Header/LinkLine/LinkLine"
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'


function Footer() {

    return (
        <div className="footer">
            <div className="footer-body _container">
                <div className="footer-nav">
                    <div className="footer-nav__list first">
                        <div className="footer-nav__item">
                            <Link className="footer-nav__item_link" to="/contacts">Контакты</Link>
                        </div>
                        <div className="footer-nav__item">
                            <Link className="footer-nav__item_link" to="/">Независимая Оценка</Link>
                        </div>
                        <div className="footer-nav__item">
                            <Link className="footer-nav__item_link" to="/documents">Правовая Информация</Link>
                        </div>
                    </div>
                    <div className="footer-nav__list second">
                        <div className="footer-nav__item">
                            <Link className="footer-nav__item_link" to="/">Услуги</Link>
                        </div>
                        <div className="footer-nav__item">
                            <Link className="footer-nav__item_link" to="/vacancies">Вакансии</Link>
                        </div>
                        <div className="footer-nav__item">
                            <Link className="footer-nav__item_link" to="/questions">Ответы на часто задаваемые вопросы</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-logo">
                    <img className="footer-logo__img" src={logo} alt="logo-zvz"/>
                </div>
                <div className="footer-link">
                    <LinkLine cls={"footer-icon"}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;