import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music';
import { BrowserRouter, Route } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Sidebar />
        <div className="app-content">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
