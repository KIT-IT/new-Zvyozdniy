import React from 'react'
import {Link} from 'react-router-dom'
import './Libraries.scss'
import {libraryData} from '../../configurations/aboutHistoryConfig'
import Accordion from '../../components/Accordion/Accordion'
import { libRulesData } from '../../configurations/libConfig';

function Libraries() {
    const list = libraryData.map(lib => {
        return (
            <li className="lib-list__item lib-item" key={lib.id}>
                <Link to={lib.to} >
                    <div className="lib-item__body">
                        <div className="lib-item__head">
                            <img className="lib-item__head_img" src={lib.img} alt={lib.name}/>
                            <p className="lib-item__head_text">{lib.name}</p>
                        </div>
                        <div className="lib-item__contetnt lib-content">
                            <div className="lib-content__phone">
                                <p className="lib-content__phone_text">{lib.phone}</p>
                            </div>
                            <div className="lib-content__info">
                                <p className="lib-content__info_text">{lib.workTime}</p>
                            </div>
                        </div>
                    </div>
                </Link>  
            </li>
        )
    })

    return (
        <>
            <div className="lib">
                <div className="lib__body _container">
                    <div className="lib-title _title">
                        <h1 className="_title">Наши библиотеки</h1>
                    </div>
                    <ul className="lib-list">
                        {list}
                    </ul>
                    <div className="lib-services">
                        <div className="li-services-title">
                            <h1 className="_title">Услуги</h1>
                        </div>
                        <div className="lib-services-subtitle">
                            <h2 className="_subtitle">Предоставление бесплатных услуг</h2>
                        </div>
                        <ul className="lib-services-list">
                            <li className="lib-services-list__item">Регистрация пользователей библиотеки</li>
                            <li className="lib-services-list__item">Выдача для временного пользования документов из имеющегося библиотечного фонда</li>
                            <li className="lib-services-list__item">Поиск информации в справочно-поисковом аппарате</li>
                            <li className="lib-services-list__item">Оперативные справочно-библиографические услуги ( за исключением составления тематических списков литературы, предоставления письменных справок справочно-библиографического содержания)</li>
                            <li className="lib-services-list__item">Информация о библиотеках и центрах научной информации города Москвы с помощью сети Интернет</li>
                            <li className="lib-services-list__item">Доступ к книжным выставкам из фондов библиотеки</li>
                            <li className="lib-services-list__item">Предварительный заказ документов, бронирование и продление срока бронирования в читательном зале</li>
                            <li className="lib-services-list__item">Экскурсионные услуги</li>
                            <li className="lib-services-list__item">Ксерокопирование</li>
                            <li className="lib-services-list__item">Печать на принтере</li>
                            <li className="lib-services-list__item">Сканирование</li>
                            <li className="lib-services-list__item">Выполнение тематической справки по ресурсам Интернет</li>
                            <li className="lib-services-list__item">Индивидуальная консультация по поиску в Интернет</li>
                            <li className="lib-services-list__item">Проведение культурно-массовых мероприятий с привлечением сторонних организаций</li>
                            <li className="lib-services-list__item">Предоставление рабочих мест, оборудованных компьютерами для пользователей библиотеки</li>
                        </ul>
                    </div>
                    <div className="lib-rules">
                        <div className="lib-rules__title">
                            <h1 className="_title">Правила Посещения</h1>
                        </div>
                        <Accordion dataConst={libRulesData} isDocs={false} isList={true}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Libraries
