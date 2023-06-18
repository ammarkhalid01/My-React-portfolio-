import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { ThemeProvider } from './context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
    </div>
);
