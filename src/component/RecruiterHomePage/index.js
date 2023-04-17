import {Component} from 'react'

import {Link} from 'react-router-dom'

import JobsContainer from '../JobsContainer'

import UsersContainer from '../UsersContainer'

import Profile from '../Profile'

import './index.css'

import React,{useState,useEffect} from "react";

import axios from "axios" 




var RecruiterHome = () => {

  const jobs = [
    {
      Company: 'TATA',
      Salary: '5l',
      Role: 'SOFTWARE DEVELOPER',
      Location: 'HYDERABAD',
    },
    {
      Company: 'INFOSYS',
      Salary: '5l',
      Role: 'PYTHON DEVELOPER',
      Location: 'BANGALORE',
    },
    {
      Company: 'WIPRO',
      Salary: '5l',
      Role: 'BACK-END DEVELOPER',
      Location: 'CHENNAI',
    },
  ]

  var [jobsList,setJobsList] = useState(jobs) 
  var [jobsSection,setJobsSection] = useState(false) 
  var [users,setUsers] = useState([])

  var changeButton = () => {
    setJobsSection(true)
  }

  var changeState = () => {
    setJobsSection(false)
  }

  useEffect(() =>
  {
      axios.get("http://localhost:9001/users")
      .then((res) =>
      {
        console.log(res.data);
        setUsers(res.data)
      })
      .catch((err) =>
      {
        console.log(err);
      })
  },[])

    return (
      <div>
        <nav className="header-container">
          <div className="logo-and-title-container">
            <h1 className="title" onClick={changeButton}>
              Application
            </h1>
          </div>

          <ul className="nav-items-list">
            <li className="link-item">
              <Link
                className="route-link"
                to="student-home"
                onClick={changeState}
              >
                POST JOBS
              </Link>
              <Link
                className="route-link"
                to="student-home"
                onClick={changeState}
              >
                COMPANY PROFILE
              </Link>
              <Link className="route-link" to="/login">
                <button type="button" className="button1">
                  logout
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        {jobsSection ? (
          <ul className="ul">
            {jobsList.map(each => (
              <JobsContainer each={each} />
            ))}
          </ul>
        ) : (
          <ul className="ul">
            {users.map(each => (
              <UsersContainer each={each} />
            ))}
          </ul>
        )}
      </div>
    )

}

export default RecruiterHome;