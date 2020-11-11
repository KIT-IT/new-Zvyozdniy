import React from 'react';
import './LinkInfoLine.scss'
import LinkLine from "../LinkLine/LinkLine";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'





function LinkInfoLine() {
    return (
        <div className="link-info-line-body">
            <div className="link-info _container">
                <LinkLine />
                <div className="info-line">
                    <div className="info-line-body">
                        <div className="info-location">
                            <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />
                            <p className="info-location__link">
                                    108828 г.Москва, п.Краснопахорское, с.Красная Пахра, ул.Заводская, д.20
                            </p>
                        </div>
                        <div className="info-mail">
                            <FontAwesomeIcon className='icon' icon={faEnvelope} />
                            <p className="info-mail__link">
                                    zvyozdniy@mail.ru
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LinkInfoLine;