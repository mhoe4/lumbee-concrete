import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Lumbee Concrete</Link>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className={this.props.location.pathname === '/trade' ? 'nav-item active' : 'nav-item'} >
                <Link className="nav-link" to="/trade">Trade</Link>
              </li>
              <li className={this.props.location.pathname === '/donate' ? 'nav-item active' : 'nav-item'} >
                <Link className="nav-link" to="/donate">Donate</Link>
              </li>
            </ul>
          </div> */}
      </nav>
    );
  }
}

export default withRouter(Nav);