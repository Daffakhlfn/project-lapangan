import React, {Component} from 'react';
import {Link} from "react-router-dom";
class Navbar extends Component {
  Logout = () => {
    localStorage.removeItem("Token");
    window.location = "/login"
  }
  render() {
    let role = localStorage.getItem("role");

    let auth = localStorage.getItem("Token");
    return (
      <div className="navbar navbar-expand-lg bg-dark navbar-dark">
        <button type="button" className="navbar-toggler navbar-toggler-right"
          data-toggle="collapse" data-target="#menu">
          <span className="navbar navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="menu">
          <ul className="navbar-nav">
          <a className="navbar-brand ml-5 text-white" href="#">SEWA LAPANGAN</a>
            <li className="navbar-item">
              <Link className="nav-link" to="/member">Member</Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/lapangan">Lapangan</Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/nyewa">Sewa</Link>
            </li>
            <li className="navbar-item">
              <a className="nav-link" onClick={this.Logout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;
