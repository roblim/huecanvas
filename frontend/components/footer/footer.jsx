import React from "react";
import { Link } from "react-router-dom";


const backgroundAuthor = (imgAuthor) => {
  if (imgAuthor) {
    return (
      <p className="footer-text">background posted by: <Link to={`/api/users/${imgAuthor.id}`} value={imgAuthor.username}/></p>
    )
  } else {
    return (
      <p className="footer-text">created by: <a href="https://github.com/pedropreciado" className="footer-link">
        pedro preciado
      </a>
      </p>
    )
  }
}

const Footer = ({imgAuthor}) => {
  return (
    <footer>
      <div>
        <a href="https://github.com/" className="footer-link">github</a>
        <a href="https://linkedin.com/" className="footer-link">linkedin</a>
      </div>
      {backgroundAuthor(imgAuthor)}
    </footer>

  )
}

export default Footer;
