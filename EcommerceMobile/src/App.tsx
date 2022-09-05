import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import LoginPage from './pages/login/loginPage';
import { store } from './store/store';

const App: () => ReactNode = () => {
  return (
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
};

export default App;
