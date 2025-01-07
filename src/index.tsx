import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './views/App/App';
import { OFFERS } from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './stores';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={OFFERS} />
    </Provider>
  </React.StrictMode>
);
