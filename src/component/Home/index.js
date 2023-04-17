import {Component} from 'react'

import {Link} from 'react-router-dom'

import JobsContainer from '../JobsContainer'

import Profile from '../Profile'

import './index.css'

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

class Home extends Component {
  state = {
    jobsList: jobs,
    jobsSection: false,
  }

  changeButton = () => {
    this.setState({jobsSection: true})
  }

  changeState = () => {
    this.setState({jobsSection: false})
  }

  render() {
    const {jobsList, jobsSection} = this.state

    return (
      <div>
        <nav className="header-container">
          <div className="logo-and-title-container">
            <h1 className="title" onClick={this.changeButton}>
              JOBS
            </h1>
          </div>

          <ul className="nav-items-list">
            <li className="link-item">
              <Link
                className="route-link"
                to="student-home"
                onClick={this.changeState}
              >
                Update Profile
              </Link>
              <Link
                className="route-link"
                to="student-home"
                onClick={this.changeState}
              >
                Profile
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
          <Profile />
        )}
      </div>
    )
  }
}

export default Home