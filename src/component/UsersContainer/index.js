import './index.css'

const UsersContainer = props => {
  const {each} = props
  const {emailId,firstName,lastName} = each
  return (
    <li className="job-div">
      <p>{emailId}</p>
      <p>{firstName}</p>
      <p>{lastName}</p>
    </li>
  )
}

export default UsersContainer