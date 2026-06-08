import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import GlobalStyle from './styles/GlobalStyle';
import HomePage from './components/HomePage';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <HomePage />
    </Provider>
  );
}

export default App;
