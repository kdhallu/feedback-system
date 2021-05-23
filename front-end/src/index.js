import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import AdminSection from './pages/admin-section/AdminSection';
import EmployeeSection from './pages/employee-section/EmployeeSection'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/Home";
import SelectEmployee from "./pages/employee-section/SelectEmployee";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <div>
        <nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/admin" exact>
            <AdminSection />
          </Route>
          <Route path="/employee-feedback">
            <EmployeeSection />
          </Route>
          <Route path="/select-employee" exact>
            <SelectEmployee />
          </Route>
        </Switch>
        </nav>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
