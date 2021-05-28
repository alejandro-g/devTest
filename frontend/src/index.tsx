import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StudentList from './components/Students/StudentList';
import StudentForm from './components/Students/StudentForm';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route  exact path="/" component={StudentList}></Route>
        <Route path="/new-student" component={StudentForm}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

