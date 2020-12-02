import React from 'react';
import './scss/style.scss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import About from './pages/About/About';
import Personal from './pages/About/personal/Personal';
import Documents from './pages/About/documents/Documents';
import Libraries from './pages/Libraries/Libraries';
import Questions from './pages/About/questions/Questions';
import Contacts from './pages/About/contacts/Contacts';
import LibreriesItem from './pages/Libraries/LibreriesItem/LibreriesItem';
import {pahraLib,pahraKidsLib,bilovoLib,minzagLib} from './configurations/libConfig'
import Events from './pages/Events/Events';
import Clubs from './pages/Clubs/Clubs';
import ClubsList from './pages/Clubs/ClubsList/ClubsList';
import {clubsCircList, clubsYoungersList, clubsArtList, clubsVocalList, clubsDanceList, clubsTheatreList, clubsOldersList} from './configurations/clubsListConfig'
import Festivals from './pages/Festivals/Festivals';


function App() {
    return (
    <Router>
        <Header/>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/about" component={About} />
            <Route path="/personal" component={Personal} />
            <Route path="/documents" component={Documents} />
            <Route path="/questions" component={Questions} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/libraries" component={Libraries} />
            <Route path="/festivals" component={Festivals} />


            <Route path="/libreries/pahraLib">
              <LibreriesItem 
                title={pahraLib.title}
                subtitle={pahraLib.subtitle}  
                src={pahraLib.src}
                ardres={pahraLib.arders}
                worktime={pahraLib.worktime}
                phone={pahraLib.phone}
                historyText={pahraLib.historyText}
                photoSrc1={pahraLib.photoSrc1}            
                photoSrc2={pahraLib.photoSrc2}            
                photoSrc3={pahraLib.photoSrc3}       
                srcToMap={pahraLib.srcToMap}     
              />
            </Route>

            <Route path="/libreries/pahraKidsLib">
              <LibreriesItem 
                title={pahraKidsLib.title}
                subtitle={pahraKidsLib.subtitle}  
                src={pahraKidsLib.src}
                ardres={pahraKidsLib.arders}
                worktime={pahraKidsLib.worktime}
                phone={pahraKidsLib.phone}
                historyText={pahraKidsLib.historyText}
                photoSrc1={pahraKidsLib.photoSrc1}            
                photoSrc2={pahraKidsLib.photoSrc2}            
                photoSrc3={pahraKidsLib.photoSrc3}       
                srcToMap={pahraKidsLib.srcToMap}     
              />
            </Route>

            <Route path="/libreries/bilovoLib">
              <LibreriesItem 
                title={bilovoLib.title}
                subtitle={bilovoLib.subtitle}  
                src={bilovoLib.src}
                ardres={bilovoLib.arders}
                worktime={bilovoLib.worktime}
                phone={bilovoLib.phone}
                historyText={bilovoLib.historyText}
                photoSrc1={bilovoLib.photoSrc1}            
                photoSrc2={bilovoLib.photoSrc2}            
                photoSrc3={bilovoLib.photoSrc3}       
                srcToMap={bilovoLib.srcToMap}     
              />
            </Route>

            <Route path="/libreries/minzagLib">
              <LibreriesItem 
                title={minzagLib.title}
                subtitle={minzagLib.subtitle}  
                src={minzagLib.src}
                ardres={minzagLib.arders}
                worktime={minzagLib.worktime}
                phone={minzagLib.phone}
                historyText={minzagLib.historyText}
                photoSrc1={minzagLib.photoSrc1}            
                photoSrc2={minzagLib.photoSrc2}            
                photoSrc3={minzagLib.photoSrc3}       
                srcToMap={minzagLib.srcToMap}     
              />
            </Route>

            <Route path="/events"><Events month="Октябрь"/></Route>
            <Route path="/clubs" component={Clubs}/>

            <Route path="/youngers"><ClubsList clubsList={clubsYoungersList}/></Route>
            
            <Route path="/circ"><ClubsList clubsList={clubsCircList}/></Route>

            <Route path="/art"><ClubsList clubsList={clubsArtList}/></Route>

            <Route path="/music"><ClubsList clubsList={clubsVocalList}/></Route>

            <Route path="/dance"><ClubsList clubsList={clubsDanceList}/></Route>

            <Route path="/theatre"><ClubsList clubsList={clubsTheatreList}/></Route>

            <Route path="/moscow-longevity"><ClubsList clubsList={clubsOldersList}/></Route>

        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
