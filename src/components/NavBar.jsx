import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../path/to/your/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {/* <img src={logo} alt="Logo" width="50" height="50" /> */}
          My Blog
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/newPost">
                Nouvel article
              </Link>
            </li>
            {/* Ajoutez d'autres liens de navigation ici */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
