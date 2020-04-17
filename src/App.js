import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music';
import { Route } from 'react-router-dom'

 
const App = (props) => {
  return (
    <div className="app">
      <Header />
      <Sidebar sideBarLinks={props.state.sidebar} friendsList={props.state.dialogsPage.dialogs} />
      <div className="app-content">
        <Route path="/profile" render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/> } />
        <Route path="/dialogs"
          render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
      </div>

    </div>
  );
}

export default App;
