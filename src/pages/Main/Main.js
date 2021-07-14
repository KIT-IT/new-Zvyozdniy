import React from 'react';
import EventsPreview from "./EventsPreview/EventsPreview";
import NewsPreview from "./NewsPreview/NewsPreview";
//import Carousel from "../../components/Carousel/Carousel";
import InfoAboutAssociation from "./InfoAboutAssociation/InfoAboutAssociation";
import HoWeAre from "./HoWeAre/HoWeAre";
import VideoBanner from '../../components/VideoBanner/VideoBanner';
import Leto from './Leto/Leto';

function Main() {
    return (
        <div className="main wrapper">
           {/* <div className="main-preview">
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
           </div> */}
           <VideoBanner />
            <div className="main-content">
                <div className="main-content__body">
                    {<Leto />}
                    {<HoWeAre />}
                    {<EventsPreview />}
                    {<InfoAboutAssociation />}
                    {<NewsPreview />}
                </div>
            </div>
        </div>
    );
}

export default Main;