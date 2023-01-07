import React, { Component } from 'react'
//  import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {


  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">NewsKitty</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            
              <li>  <NavLink className="nav-link " aria-current="page" to="/general">general </NavLink></li>
              <li>  <NavLink className="nav-link " aria-current="page" to="/business">busines</NavLink></li>
              <li>  <NavLink className="nav-link " aria-current="page" to="/entertainment">entertainment </NavLink></li>

              <li>  <NavLink className="nav-link " aria-current="page" to="/health">health </NavLink></li>
              <li>  <NavLink className="nav-link " aria-current="page" to="/science">science</NavLink></li>
              <li>  <NavLink className="nav-link " aria-current="page" to="/sports">sports  </NavLink></li>
              <li>  <NavLink className="nav-link " aria-current="page" to="/technology">technology   </NavLink></li>

            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
