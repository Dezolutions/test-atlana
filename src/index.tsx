import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import store from './store'
import ProfilePage from './pages/ProfilePage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/users/:loginParam' component={ProfilePage}/>
        </Switch> 
      </Router>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

