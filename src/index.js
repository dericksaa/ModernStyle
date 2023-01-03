import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './context/StateProvider';
// Aquí envolvemos toda nuestra aplicación el state provider para obtener las actualizaciones de estado en todos los componentes de la página 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider>
      <App/>
    </StateProvider>
  </React.StrictMode>
);

reportWebVitals();


