import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/init';
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();