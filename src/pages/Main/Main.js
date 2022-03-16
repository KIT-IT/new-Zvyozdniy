import React from 'react';
import EventsPreview from "./EventsPreview/EventsPreview";
import NewsPreview from "./NewsPreview/NewsPreview";
import Carousel from "../../components/Carousel/Carousel";
import HoWeAre from "./HoWeAre/HoWeAre";
import FestivalPoster from './FestiivalPoster/FestivalPoster';


function Main() {
    return (
        <div className="main wrapper">
           <div className="main-preview">
               <div className="main-preview__body">
                   <div className="main-preview__content">
                       <div className="main-preview__title">
                           <p className="main-preview__title_text _title">Дом культуры "Звёздный"</p>
                       </div>
                       <div className="main-preview__slider">
                           <div className="main-preview__slider_body">
                                <Carousel />
                           </div>
                       </div>
                   </div>
               </div>
           </div>
            <div className="main-content">
                <div className="main-content__body">
                    {<HoWeAre />}
                    {<EventsPreview />}
                    {<FestivalPoster 
                        name={'Красная линия'} 
                        description={'Открытый ежегодный фестиваль любительских театральных коллективов посвящённый памяти Елены Александровны Гущиной'} 
                        dateTime={'27.03.2022 / 12 : 00'} 
                        doc={require('../../assets/docs/festivals/Красная-линия.docx')}
                        bg={require('../../assets/images/red-line-poster.jpg')}/>
                    }
                    {<FestivalPoster 
                        name={'Точное поподание'} 
                        description={'Фестиваль - конкурс музыкальных пародий «Точное попадание», проходящий в рамках празднования 10-летия ТиНАО'} 
                        dateTime={'01.04.2022 / 18 : 00'} 
                        doc={require('../../assets/docs/festivals/Точное-попадание-2022.docx')}
                        bg={require('../../assets/images/strike-poster.jpg')}/>
                    }
                    {<NewsPreview />}
                </div>
            </div>
        </div>
    );
}

export default Main;