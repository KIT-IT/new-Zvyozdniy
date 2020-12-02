import React from 'react'
import './LibreriesItem.scss'

function LibreriesItem({title, subtitle, src, ardres, worktime, phone, historyText, photoSrc1, photoSrc2, photoSrc3, srcToMap}) {
    return (
        <div className="libreriesItem wrapper">
            <div className="libreriseItem__body _container">
                <div className="libreriesItem-title">
                    <h1 className="ibreriesItem-title__title _title">{title}</h1>
                </div>
                <div className="libreriesItem-mainInfo">
                    <div className="libreriesItem-mainInfo__body">
                        <div className="libreriesItem-mainInfo__img">
                            <img className="libreriesItem-mainInfo__img_img" src={src} alt={title}/>
                        </div>
                        <div className="libreriesItem-mainInfo-infoblock">
                            <h2 className="libreriesItem-mainInfo-infoblock__title _subtitle">{subtitle}</h2>
                            <div className="libreriesItem-mainInfo-infoblock__block">
                                <p className="libreriesItem-mainInfo-infoblock__block_ardres">{ardres}</p>
                            </div>
                            <div className="libreriesItem-mainInfo-infoblock__block">
                                <p className="libreriesItem-mainInfo-infoblock__block_worktime">{worktime}</p>
                            </div>
                            <div className="libreriesItem-mainInfo-infoblock__block">
                                <p className="libreriesItem-mainInfo-infoblock__block_phone">{phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="libreriesItem-history">
                    <div className="libreriesItem-history__body">
                        <p className="libreriesItem-history__body_text">{historyText}</p>
                    </div>
                </div>
                <div className="libreriesItem-photo">
                    <div className="libreriesItem-photo__body">
                        <img src={photoSrc1} alt={title} className="libreriesItem-photo__body_item"/>
                        <img src={photoSrc2} alt={title} className="libreriesItem-photo__body_item"/>
                        <img src={photoSrc3} alt={title} className="libreriesItem-photo__body_item"/>
                    </div>
                </div>
                <div className="libreriesItem-map">
                    <div className="libreriesItem-map__map">
                        <iframe src={srcToMap} width="100%" height="400px" frameBorder="0" title="library"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibreriesItem
