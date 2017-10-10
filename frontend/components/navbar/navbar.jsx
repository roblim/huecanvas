import React from "react";
import { Link, withRouter } from "react-router-dom";


const displayName = (currentUser, logout) => (

      <navGroup className="nav-group">
        <h3>
          <Link to={`/users/${currentUser.id}`} className="logo" id="currentUser">
          {currentUser.username}
        </Link>
        </h3>
        <button onClick={logout}>logout</button>
      </navGroup>
)

const displayLinks = () => (
  <nav className="nav-SessionLinks">
    <Link to="/login"><button>login</ button></ Link>
    <Link to="/signup"><button>signup</ button></ Link>
  </nav>
)

const NavBar = ({currentUser, logout, fetchUser }) => {
  return (
  <div>
    {currentUser ? displayName(currentUser, logout) : displayLinks()}
  </div>
  )
};

export default NavBar;
