/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import configureStore from './store/configureStore';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

require('./favicon.ico'); // Tell webpack to load favicon.ico

const store = configureStore();

render(
  <Provider store={store}>
    <Routes />
  </Provider>, document.getElementById('app'),
);
