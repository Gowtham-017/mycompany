import './Get.css';
import {Link} from "react-router-dom"
import { FaSignOutAlt } from 'react-icons/fa';
import  axios  from 'axios';
import React, { Component } from 'react'

export class Get extends Component {
  state = {
    data: []
    }
  
    componentDidMount() {
    axios.get('http://127.0.0.1:8080/getmap')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  

  render() {
    return (
      <div>
         <nav>
       
       <ul className="menu">
         <li><Link to="Navigation"><FaSignOutAlt size={25}/></Link></li>
       </ul>
     </nav>
      
       <h1>Get Employee Details</h1>
   
    <center>
       <table id="customers" border={1}>
      <thead>
        <tr>
          <th>EmpId</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Role</th>
          <th>Experience</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.empid}>
            <td>{user.empid}</td>
            <td>{user.name}</td>
            <td>{user.salary}</td>
            <td>{user.role}</td>
            <td>{user.experience}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </center>
    </div>
    
    );
  }
}

export default Get