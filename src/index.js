import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  './tailwind.css'
import {DataProvider} from './store/store'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if(process.env.NODE_ENV === 'production') disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <DataProvider >
    <App/>
    </DataProvider>
    </React.StrictMode>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
