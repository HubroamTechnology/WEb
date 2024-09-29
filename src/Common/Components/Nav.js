import React, { useState } from 'react';
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setExpanded(false); // Close the menu
  };

  return (
    <Navbar className='bg_blue' expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/">BrandName</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav">
            <NavLink onClick={() => handleNavigation('/')}>Home</NavLink>
            <NavLink onClick={() => handleNavigation('/About')}>About</NavLink>
            <NavLink onClick={() => handleNavigation('/Contact')}>Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
