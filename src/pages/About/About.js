import React, {useState} from 'react'
import HistoryAbout from './HistoryAbout'
import {historyData} from '../../configurations/aboutHistoryConfig'
import './About.scss'

function About() {
    const [tab, setTab] = useState(true)

    const handleTabe = (event) => {
       if (event.target.id === "1") {
          if (tab === true) {
             setTab(tab)
          } else {
             setTab(!tab)
          }
       }
       if (event.target.id === "2") {
          if (tab === true) {
             setTab(!tab)
          } else {
             setTab(tab)
          }
       }
    }

    return (
     <div className="info-history wrapper">
        <div className="info-history__body">
           <div className="info-history-tabs">
              <ul className="tabs-list _container">
                 <li id="1" onClick={handleTabe} className="tabs-list__item">О Доме Культуры</li>
                 <li id="2" onClick={handleTabe} className="tabs-list__item">Историческая справка</li>
              </ul>
           </div>
           <div className="info-history-main _container">
              {
                 tab
                    ? <HistoryAbout
                       text={historyData.about.text}
                       src={historyData.about.src}
                    />
                    : <HistoryAbout
                       text={historyData.history.text}
                       src={historyData.history.src}
                    />
              }
           </div>
        </div>
     </div>
    )
}

export default About
