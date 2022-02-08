import React = require('react');
import { Container, Nav, Navbar as BSNavbar } from 'react-bootstrap';
import { strings } from '../shared';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <BSNavbar bg="dark" variant="dark">
      <Container>
        <BSNavbar.Brand href="#">{strings.navbar.label}</BSNavbar.Brand>
      </Container>
    </BSNavbar>
  );
};
