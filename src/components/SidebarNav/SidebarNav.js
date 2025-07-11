// SidebarNav.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faWallet, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './SidebarNav.css';

function SidebarNav() {
  return (
    <Nav className="flex-column fixed">
      <Link to="/dashboard">
        <img src={`${process.env.PUBLIC_URL}/images/Logo/logo.png`} alt="Logo" className="logo-img" />
      </Link>
      <Nav.Link as={Link} to="/dashboard"><FontAwesomeIcon icon={faHome} className="nav-icon"/> Dashboard</Nav.Link>
      <Nav.Link as={Link} to="/incomes"><FontAwesomeIcon icon={faDollarSign} className="nav-icon" /> Incomes</Nav.Link>
      <Nav.Link as={Link} to="/expenses"><FontAwesomeIcon icon={faWallet} className="nav-icon" /> Expenses</Nav.Link>
      <Nav.Link as={Link} to="/signout" className="exit-link">
        Sign Out
      </Nav.Link>
    </Nav>
  );
}

export default SidebarNav;