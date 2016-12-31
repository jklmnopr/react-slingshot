import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
// import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import ServersPage from './containers/ServersPage';
import NotFoundPage from './components/NotFoundPage';

const Routes = () => (
  <BrowserRouter>
    <App>
      <div>
        <Match exactly pattern="/" component={ServersPage} />
        <Match pattern="/fuel-savings" component={FuelSavingsPage} />
        <Match pattern="/about" component={AboutPage} />
        <Match pattern="/servers" component={ServersPage} />
        <Miss component={NotFoundPage} />
      </div>
    </App>
  </BrowserRouter>
);

export default Routes;
