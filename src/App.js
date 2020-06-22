import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Music from './components/Music/Music';
import { Route } from 'react-router-dom'
 
const App = (props) => {
  return (
    <div className="app">
      <Header />
      <SidebarContainer />
      <div className="app-content">
        <Route path="/profile" render={() => <Profile /> } />
        <Route path="/dialogs"
          render={() => <DialogsContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
      </div>

    </div>
  );
}

export default App;
