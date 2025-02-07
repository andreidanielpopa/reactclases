import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import PadreNumeros from './components/PadreNumeros';
import Comic from './components/Comic';
import Comics from './components/Comics';
// import DibujosComplejos from './components/DibujosComplejos';
// import DibujosComplejosReact from './components/DibujosComplejosReact';
// import PadreDeportes from './components/PadreDeportes';
// import Contador from './components/Contador';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Contador inicio='9'/>
    <Contador inicio='14'/> */}
    <Comics/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
