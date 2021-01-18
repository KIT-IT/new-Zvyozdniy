import React from 'react';
import LinksSection from "./LinksSection/LinksSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'


function HeaderMediaSection() {
    return (
        <div className="header-media-section element-with-changing-styles">
            <div className="header-media-section__body _container">
                <div className="header-media-section__links">
                    <LinksSection cls={"header-icon element-with-changing-styles"} color={'#fff'} id={'header-icon'}/>
                </div>
                <div className="info-line">
                    <div className="info-line__body">
                        <div className="info-phones">
                            <FontAwesomeIcon className='header-icon element-with-changing-styles' icon={faPhoneAlt} />
                            <a className="info-phones__link" href="tel:+74958508053">+7 (495) 850-80-53</a>
                        </div>
                        <div className="info-location">
                            <FontAwesomeIcon className='header-icon element-with-changing-styles' icon={faMapMarkerAlt} />
                            <p className="info-location__link">108828 г.Москва, п.Краснопахорское, с.Красная Пахра, ул.Заводская, д.20</p>
                        </div>
                        <div className="info-mail">
                            <FontAwesomeIcon className='header-icon element-with-changing-styles' icon={faEnvelope} />
                            <a className="info-mail__link" href="mailto:zvyozdniy@mail.ru">zvyozdniy@mail.ru</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMediaSection;