import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import './index.css';
import App from './App';

const init = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root'),
  )
}

init(App)
