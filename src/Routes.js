import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

const Routes = () => (
  <BrowserRouter>
    <App>
      <Match exactly pattern="/" component={HomePage} />
      <Match exactly pattern="/fuel-savings" component={FuelSavingsPage} />
      <Match exactly pattern="/about" component={AboutPage} />
      <Miss component={NotFoundPage} />
    </App>
  </BrowserRouter>
);

export default Routes;
