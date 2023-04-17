import { useNavigate } from 'react-router-dom'
import './index.css'

const MainPage = props => {

  var nav = useNavigate();
  const {history} = props
  const gotoStudentPage = () => {
    // history.push('/registration')
    nav("/registration")
  }

  const gotRecruiterPage = () => {
    // history.push('/recruiter-home')
    nav("/recruiter-home")
  }

  return (
    <div className="mainpage-div">
      <h1>JOB PORTAL</h1>
      <div>
        <button className="button1" type="button" onClick={gotoStudentPage}>
          STUDENT
        </button>
        <button className="button1" type="button" onClick={gotRecruiterPage}>
          RECRUITER
        </button>
      </div>
    </div>
  )
}

export default MainPage