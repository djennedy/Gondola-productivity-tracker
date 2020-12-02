import React from 'react';
import './App.css';
import Header from './Header';
import Panel2 from './Panel2';
import { browserHistory, Router, Route } from 'react-router';
// import LetsGo from './LetsGo';
import Box from './Panel1';
import SettingsTab from './PanelSettings';
import { Switch } from 'react-router-dom';
import PauseBttn from './PauseBttn';
import StopTheRideBttn from './StopTheRideBttn';
function App() {
  return (
    <main>
      <div>
        <Panel2/>
        <Switch>
          <Route path="/" component={Box} exact />
          <Route path="/settings" component={SettingsTab} />
        </Switch>
      {/* <LetsGo/> */}
      </div>
    </main>
  );
}

export default App;
