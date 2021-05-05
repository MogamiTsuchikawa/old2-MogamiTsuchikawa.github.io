import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './component/MainPage'
import HeaderComponent from './component/Header'
import TerminalPage from './component/Terminal'
import Work from './component/Work'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <HeaderComponent/>
      <Route exact path="/" component={MainPage}></Route>
      <Route exact path="/work" component={Work}></Route>
      <Route exact path="/terminal" component={TerminalPage}></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
