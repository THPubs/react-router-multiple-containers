import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import Home from './Home';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import SessionContainer from './SessionContainer';
import MainAppContainer from './MainAppContainer';

import reducers from './reducers';

const store = createStore(
  reducers
);


const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
