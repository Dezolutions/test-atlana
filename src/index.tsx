import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch,Route, Redirect} from 'react-router-dom'
import store from './store'
import ProfilePage from './pages/ProfilePage';

ReactDOM.render(
  
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/test-atlana' component={App} />
          <Route exact path='/test-atlana/users/:loginParam' component={ProfilePage}/>
          <Redirect to='/test-atlana'/>
        </Switch> 
      </Router>
    </Provider>
  ,
  document.getElementById('root')
);

