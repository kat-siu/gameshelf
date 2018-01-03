import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
// import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>gameshelf</h1>
      <GreetingContainer />
    </header>

    <Route exact path="/" component={SessionFormContainer}/>

  </div>
  // <Route path='/login' component={SessionFormContainer} />
  // <Route path='/signup' component={SessionFormContainer} />
);

export default App;
