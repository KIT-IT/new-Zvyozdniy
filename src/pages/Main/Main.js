import React from 'react';
import EventsPreview from "./EventsPreview/EventsPreview";
import NewsPreview from "./NewsPreview/NewsPreview";

function Main() {
    return (
        <div className="main wrapper">
           <div className="main-preview"></div>
            <div className="main-content">
                <div className="main-content__body">
                    {<EventsPreview/>}
                    {<NewsPreview/>}
                </div>
            </div>
        </div>
    );
}

export default Main;