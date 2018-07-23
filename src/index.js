import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Main from './containers';

import './stylesheets/common.scss';
import './stylesheets/index.scss';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Main />
    </AppContainer>,
    document.getElementById('wrap'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./containers', () => {
    render();
  });
}
