// import {BrowserRouter, Route, Switch} from 'react-router-dom'

import MainPage from './component/MainPage'

import RegistrationForm from './component/RegistrationForm'

import LoginForm from './component/LoginForm'

import Home from './component/Home'

import Profile from './component/Profile'

import RecruiterHome from './component/RecruiterHomePage'

import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";


import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage/>} />;
      <Route path="/registration" element={<RegistrationForm/>} />;
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/student-home" element={<Home/>} />;
      <Route path="/student-profile" element={<Profile/>} />;
      <Route path="/recruiter-home" element={<RecruiterHome/>} />
    </Routes>
  </Router>
)

App()

export default App