import React from 'react';
import './App.css'
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Games from "./components/Games/Games";
import MessengerContainer from "./components/Messenger/MessangerConteiner";







const App = () => {
    return (
            <div className="app-conteiner">
                <Header/>
                <Navbar/>
                <div className="app-conteiner-content">
                    <Route path='/Profile' render={ () => <Profile />} />
                    <Route path='/Dialogs' render={ () => <MessengerContainer /> } />
                    <Route path='/News' component={News}  />
                    <Route path='/Music' component={Music}  />
                    <Route path='/Games' component={Games}  />
                    <Route path='/Settings' component={Settings}  />
                </div>
            </div>

    );
}


export default App;
