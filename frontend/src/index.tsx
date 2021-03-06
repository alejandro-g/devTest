//33:43
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import StudentList from './components/Students/StudentList';
import StudentForm from './components/Students/StudentForm';
import './index.css';
import 'react-toastify/dist/ReactToastify.css'
import 'bootswatch/dist/pulse/bootstrap.min.css' //custom bootstrap theme with integrated css
import Navbar from './components/Navbar/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Navbar />

      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={StudentList}></Route>
          <Route path="/new-student" component={StudentForm}></Route>
          <Route path="/update/:id" component={StudentForm}></Route>
        </Switch>
        <ToastContainer />
      </div>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

