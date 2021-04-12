import React from 'react'
import PagePreview from "../../../components/PagePrewievImageNavigation/PagePreview";
import AboutLinks from "./AboutLinks/AboutLinks";
import AboutContent from "./AboutContent/AboutContent";


function About() {
    return (
     <div className="about wrapper">
        <div className="about__body">
           <PagePreview
               title={"О Доме Культуры"}
               backgroundImage={require("../../../assets/images/backgroundImages/aboutZvz.jpeg")}
               isNested={true}
               secondPageName={"О Нас"}
           />
            {<AboutLinks />}
            {<AboutContent/>}
        </div>
     </div>
    )
}

export default About
