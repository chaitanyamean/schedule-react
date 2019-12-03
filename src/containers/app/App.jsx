import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import ResponsiveDrawer from '../../components/side-drawer/drawer'
import ScheduleContainer from '../schedule/schedule';
import LinesContainer from '../lines/lines';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <ResponsiveDrawer />
      <div className="main-wrap">

        <Switch>
          <Route exact path="/schedule" component={ScheduleContainer} />
          <Route exact path="/lines" component={LinesContainer} />

          <Redirect from="*" to="/" />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
