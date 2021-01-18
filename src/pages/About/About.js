import React, {useState} from 'react'
import AboutContentComponent from './AboutContentComponent'
import {aboutContentConfig} from '../../configurations/aboutPageConfigurations/aboutContentConfig'
import PagePreview from "../../components/PagePrewievImageNavigation/PagePreview";

function About() {
    const [activeIndex, setActiveIndex] = useState(1);

    const [component, setComponent] = useState(<AboutContentComponent heading={aboutContentConfig.about.heading} text={aboutContentConfig.about.text} src={aboutContentConfig.about.src}/>)
    function handleFirstCompopnent() {
        setComponent(<AboutContentComponent heading={aboutContentConfig.about.heading} text={aboutContentConfig.about.text} src={aboutContentConfig.about.src}/>)
        setActiveIndex(1)
    }

    function handleSecondCompopnent() {
        setComponent(<AboutContentComponent heading={aboutContentConfig.history.heading} text={aboutContentConfig.history.text} src={aboutContentConfig.history.src}/>)
        setActiveIndex(2)
    }


    return (
     <div className="about wrapper">
        <div className="about__body">
           <PagePreview
               title={"О Доме Культуры"}
               backgroundImage={require("../../assets/images/backgroundImages/aboutBackground.jpeg")}
               isNested={true}
               secondPageName={"О Нас"}
           />
           <div className="about-switch-panel">
              <ul className="about-switch-panel-list _container">
                 <li id="1" onClick={handleFirstCompopnent} className="about-switch-panel-list__item">
                     <p className={activeIndex === 1 ? "about-switch-panel-list__item_active" : null} >О Доме Культуры</p>
                 </li>
                 <li id="2" onClick={handleSecondCompopnent} className="about-switch-panel-list__item">
                     <p className={activeIndex === 2 ? "about-switch-panel-list__item_active" : null}>Историческая справка</p>
                 </li>
              </ul>
           </div>
           { component }
        </div>
     </div>
    )
}

export default About
