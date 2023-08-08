import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Svgs';
import SVGs from '../components/Svgs';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={SVGs.BlogIcon} alt="Logo" width="50" height="50" />
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
            <li className="nav-item">
              <Link className="nav-link" to="/editPost">
                Modifier article
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/deletePost">
                Supprimer article
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* end container  */}
    </nav>
  );
}

export default Navbar;
