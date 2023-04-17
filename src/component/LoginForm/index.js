import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";

import './index.css'
import { useState } from 'react'

const LoginForm = () => {

    var nav = useNavigate()

    var initialState ={
        emailId:"",
        password:""
    }

    var [form,setForm] = useState(initialState)

    var handleInputChange = (event) => {
        setForm({...form,[event.target.id]:event.target.value});
    }

    var handleLogin = (event) =>
    {
        console.log(form);
        axios.post("http://localhost:9001/users/login",form)
        .then((res) =>
        {
            console.log(res.data);
            if(res.data.success)
                nav("/student-home")
        })
        .catch((err) =>
        {
            console.log(err);
        })
        event.preventDefault()
    }

    return (
  <form>
    <div className="main">
      <div className="sub-main">
        <div>
          <div>
            <h1 className="LHeader">Login</h1>
            <div>
              <input
                type="email"
                id="emailId"
                placeholder="Enter Email-id"
                className="fill"
                value={form.emailId}
                onChange={handleInputChange}
              />
            </div>
            <div className="second-input">
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="fill"
                value={form.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="login-btn">
              {/* <Link to="/student-home">/ */}
                <button className="button" type="button" onClick={handleLogin}>
                  Login
                </button>
              {/* </Link> */}
            </div>
            <div className="reg-link">
              <Link className="link" to="/registration">
                <li>Register Now</li>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
    )
}

export default LoginForm;