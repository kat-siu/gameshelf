import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>

    <AuthRoute exact path="/" component={LoginFormContainer}/>
    <AuthRoute exact path="/" component={SignupFormContainer}/>

  </div>
  // <Route path='/login' component={SessionFormContainer} />
  // <Route path='/signup' component={SessionFormContainer} />
);

export default App;
