import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import SessionContainer from './SessionContainer';
import MainAppContainer from './MainAppContainer';


const App = () => (
  <Router>
    <div>
      <SessionContainer>
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
      </SessionContainer>

      <MainAppContainer>
        <Route exact path="/" component={Home} />
      </MainAppContainer>
    </div>
  </Router>
);

export default App;
