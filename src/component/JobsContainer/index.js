import './index.css'

const JobContainer = props => {
  const {each} = props
  const {Company, Salary, Role, Location} = each
  return (
    <li className="job-div">
      <p>{Company}</p>
      <p>{Salary}</p>
      <p>{Role}</p>
      <p>{Location}</p>
    </li>
  )
}

export default JobContainer