import { useNavigate } from 'react-router-dom'
import './index.css'
import { useState } from 'react'
import axios from "axios" 


const RegistrationForm = props => {
    var nav = useNavigate()
  const {history} = props

  var initialState ={
    firstName: "",
    lastName: "",
    password: "",
    emailId: "",
  }
  var [form,setForm] = useState(initialState);

  const handlehangeInput = (event) =>
  {
    setForm({...form,[event.target.id]:event.target.value});
  }

  const registrationSubmit = (event) => {
    console.log(form);
    axios.post("http://localhost:9001/users/add",form)
    .then((res) =>{
        console.log(res.data);
        nav("/login")
    })
    .catch((err) =>{
        console.log(err);
    })
    event.preventDefault()
  }
  return (
    <form onSubmit={registrationSubmit}>
      <div className="form">
        <div className="form-body">
          <div className="port username">
            <label className="form__label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handlehangeInput}
            />
          </div>
          <div className="port lastname">
            <label className="form__label" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              name=""
              id="lastName"
              className="form__input"
              placeholder="LastName"
              value={form.lastName}
              onChange={handlehangeInput}
            />
          </div>
          <div className="port email">
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="emailId"
              className="form__input"
              placeholder="Email"
              value={form.emailId}
              onChange={handlehangeInput}
            />
          </div>
          <div className="port password">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
              value={form.password}
              onChange={handlehangeInput}
            />
          </div>
          <div className="port confirm-password">
            <label className="form__label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="port footer">
          <button type="submit" className="btn">
            Register
          </button>
        </div>
      </div>
    </form>
  )
}

export default RegistrationForm