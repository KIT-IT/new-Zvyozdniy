import React from 'react'
import './VisImpaired.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFont} from '@fortawesome/free-solid-svg-icons'



function VisImpared() {
    return (
            <div className="_container">
            <div className="visImpaired-body">
                <div className="view-block visBlock">
                    <p className="view-block__text">Версия для слабовидящих: </p>
                    <button className="view-block__button">Выкл</button>
                </div>
                <div className="img-block visBlock" >
                    <p className="img-block__text">Изображения: </p>
                    <button className="img-block__button">Выкл</button>
                </div>
                <div className="fontSize-block visBlock">
                    <p className="fontSize-block__text">Размер шрифта: </p>
                    <div className="fontSize-block__icons">
                        <div className="fontSize-block__icons_icon">
                            <FontAwesomeIcon icon={faFont} size={'xs'}/>
                        </div>
                        <div className="fontSize-block__icons_icon">
                            <FontAwesomeIcon icon={faFont} size={'sm'} />
                        </div>
                        <div className="fontSize-block__icons_icon">
                            <FontAwesomeIcon icon={faFont} size={'lg'}/>
                        </div>
                    </div>
                </div>
                <div className="background-block visBlock">
                    <p className="background-block__text">Цветовая схема:</p>
                    <div className="background-block__icons">
                        <div className="background-block__icons_icon">
                            <FontAwesomeIcon icon={faFont} size={'sm'} />
                        </div>
                        <div className="background-block__icons_icon">
                            <FontAwesomeIcon icon={faFont} size={'sm'} color={'white'}/>
                        </div>
                        <div className="background-block__icons_icon">
                            <FontAwesomeIcon icon={faFont} size={'sm'} color={'#063462'}/>
                        </  div>
                        <div className="background-block__icons_icon">
                            <FontAwesomeIcon icon={faFont} size={'sm'} color={'#A9E44D'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisImpared
