import React from 'react'
import img from '../../assets/images/10yearsTiNAO/10years-logo.png'
import { tinaoEvents } from '../../configurations/10yearsTiNAO/tinaoEventsConfig'
import TiNAOItem from './TiNAOItem/TiNAOItem'
import Icon from '../../components/Icon/Icon'

function TiNAO() {
    const list = tinaoEvents.map(item => {
        return (
            <TiNAOItem key={item.id} {...item}/>
        )
    })


    return (
       <div className="tinao wrapper">
           <div className="tinao__body">
               <div className="tinao__content">
                    <div className="tinao-preview _container">
                        <div className="tinao-preview__logo">
                            <img src={img} alt="" className="tinao-preview__logo_image" />
                        </div>
                        <div className="tinao-preview__info">
                            <div className="tinao-preview__info_title">Краснопахорское 10 лет в составе города Москвы</div>
                            <div className="tinao-preview__info_text">
                            Новая Москва активно развивается: построено восемь станций метро, в проектировании и строительстве еще около 13 станций, построено 280 километров дорог — это огромный объем дорожного строительства. Построено больше 100 объектов соцкультбыта: поликлиники, больницы, школы, детские сады и так далее. И конечно, очень важно создание рабочих мест. Население Новой Москвы увеличилось более чем в два раза, прибавив 300 тысяч. И одновременно создано 180 тысяч рабочих мест. Они разные, с разными условиями, но в целом это большое число, что позволяет людям выбирать, где они могут работать», — отметил Сергей Собянин в ходе посещения ТиНАО.
                            </div>
                        </div>
                    </div>
                    <div className="tinao-events">
                        <div className="tinao-events__wave-top">
                            <Icon name="wave-top" size="1920px" hightSize="450px" color="#31589d"/>
                        </div>
                        <div className="tinao-events__wave-bottom">
                            <Icon name="wave-bottom" size="1920px" hightSize="450px" color="#fff"/>
                        </div>
                        <div className="tinao-events__body _container">
                            <div className="tinao-events__preview">
                                <div className="tinao-events__preview_title">Мероприятия</div>
                                <div className="tinao-events__preview_subtitle">В честь празднования юбилея округа дом культуры "Звёздный" подготовил для жителей поселения Краснопахорское серию празднечных эвентов. Мероприятия будут проходить в течении месяца с 20 мая по 30 июня, на территории поселения и тематически будут связанны с юбилеем округа. Принять участие может любой желающий, ознакомится с каждым событием можно ниже:</div>    
                            </div>
                            <div className="tinao-events__content">
                                <ul className="tinao-events__content_list">{list}</ul>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
       </div> 
    )
}

export default TiNAO
