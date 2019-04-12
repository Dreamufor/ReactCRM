import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';

class Nav extends Component {
  constructor(props, context){
      super(props, context)
  }


  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={{pathname: '/',
                     search: '?lx=logo'}}className="navbar-brand" href="#">CRM</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><NavLink to='/' exact className="nav-link">Home</NavLink></li>
              <li className="nav-item"><NavLink to='/staff' className="nav-link">Staff</NavLink></li>
              <li className="nav-item"><NavLink to='/paye' className="nav-link">PAYE</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default connect()(Nav);
