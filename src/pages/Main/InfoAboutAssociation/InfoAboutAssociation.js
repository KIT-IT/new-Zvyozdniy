import React from 'react';

function InfoAboutAssociation() {
    return (
        <div className="association">
            <div className="association__body _container">
                <div className="association__content _content">
                    <div className="association__title">
                        <p className="association__title_text">Важная Информация !</p>
                    </div>
                    <div className="association__info">
                        <p className="association__info-title">В январе 2021 года, на территории поселения Краснопахорское в городе Москве, путём слияния нескольких юридических лиц был организован культурный комплекс МБУК "Дом культуры "Звёздный", в состав которого входят обособленные структурные подразделения : </p>
                        <ul className="association__info-list">
                            <li className="association__info-list_item"> -  Краснопахорская библиотечная система</li>
                            <li className="association__info-list_item"> -  Дом культуры "Юбилейный"</li>
                        </ul>
                        <p className="association__info-description">Всю необходимую информация по каждому из учреждений вы можете найти на официальном сайте и в социальных сетях Дома культуры "Звёздный"</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoAboutAssociation;