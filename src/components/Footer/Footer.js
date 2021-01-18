import React from 'react'
import {Link} from 'react-router-dom'
import LinksSection from "../Header/HeaderMediaSection/LinksSection/LinksSection";
import logo from '../../assets/images/logo.png'

function Footer() {
    let date = new Date()
    let year = date.getFullYear()


    return (
        <div className="footer element-with-changing-styles">
            <div className="footer__body _container">
                <div className="footer__content _content">
                    <div className="footer-nav">
                        <ul className="footer-nav__list first">
                            <li className="footer-nav__item-title">
                                <Link className="footer-nav__item-title_text" to='/about'>О Нас</Link>
                            </li>
                            <li className="footer-nav__item">
                                <a className="footer-nav__item_link" target="_blank" rel="noopener noreferrer" href="https://organizations.kultura.mos.ru/organizations/5074030440.html">Независимая Оценка</a>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/documents">Правовая Информация</Link>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/documents">Ответы на часто задаваемые вопросы</Link>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/documents">Вакансии</Link>
                            </li>
                        </ul>
                        <ul className="footer-nav__list second">
                            <li className="footer-nav__item-title">
                                <Link className="footer-nav__item-title_text" to='/'>Библиотеки</Link>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/">Красная Пахра</Link>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/vacancies">Красная Пахра Детская</Link>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/questions">Былово</Link>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/questions">Минзаг</Link>
                            </li>
                        </ul>
                        <ul className="footer-nav__list second">
                            <li className="footer-nav__item-title">
                                <Link className="footer-nav__item-title_text" to='/'>Контакты</Link>
                            </li>
                            <li className="footer-nav__item">
                                <a className="footer-nav__item_link" href="tel:+74958508053">+7 (495) 850-80-53</a>
                            </li>
                            <li className="footer-nav__item">
                                <p className="footer-nav__item_link">108828 г.Москва, п.Краснопахорское, с.Красная Пахра, ул.Заводская, д.20</p>
                                <a className="footer-nav__item_link" href="mailto:zvyozdniy@mail.ru">zvyozdniy@mail.ru</a>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/questions">Все контакты</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-link-section">
                        <div className="footer-links">
                            <LinksSection cls={"footer-icon"} color={'#fff'} id={'footer-icon'}/>
                        </div>
                        <div className="footer-logo-section">
                            <Link to={"/"}>
                                <img className="footer-logo-section__image" src={logo} alt=""/>
                            </Link>
                        </div>
                        <div className="footer-copyright-section">
                            <div className="footer-copyright-section__body">
                                <p className="footer-copyright-section__text">© 2000-{year} МБУК ДК Звёздный</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;