import React from 'react';
import App from './src/AppNavigation';
import store from './src/core/config/store';
import { Provider } from 'react-redux'

const Main = () => {
  return ( 
    <Provider store={store} >
      <App />  
    </Provider>
    );
};

export default Main
