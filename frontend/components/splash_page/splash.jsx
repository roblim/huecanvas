import React from "react";
import { Link } from "react-router-dom"

const Splash = () => (
  <div className="splash-link-container">
    <Link to="/login" className="splash-links">login</ Link>
      <p> or </p>
    <Link to="/signup" className="splash-links">signup.</ Link>
  </div>
)

export default Splash;
