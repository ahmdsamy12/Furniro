import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';



// Import the express in typescript file
import express from 'express';
 
// Initialize the express engine
const app: express.Application = express();
 
// Take a port 3000 for running server.
const port: number = 3000;
 
// Handling '/' Request
app.get('/', (_req, _res) => {
    _res.send("TypeScript With Express");
});
 
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
