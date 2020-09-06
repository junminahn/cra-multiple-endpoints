import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import TheLayout from './layouts/default/TheLayout';
import store from './store';
import { icons } from './assets/icons';
import '@coreui/coreui/dist/css/coreui.css';

React.icons = icons;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
