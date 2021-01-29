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
                        <p className="association__info-title">C 1 января 2021 года произошло обьединение нескольких муниципальных учреждений Краснопахорского поселения:</p>
                        <ul className="association__info-list">
                            <li className="association__info-list_item"> -  «Краснопахорская централизованная библиотечная система»</li>
                            <li className="association__info-list_item"> -  Дом Культуры "Юбилейный"</li>
                            <li className="association__info-list_item"> -  Дом Культуры "Звёздный"</li>
                        </ul>
                        <p className="association__info-description">Всю необходимую информация по каждому из учреждений вы можете найти на официальном сайте и в социальных сетях Дома Культуры "Звёздный"</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoAboutAssociation;