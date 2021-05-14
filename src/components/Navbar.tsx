import React = require('react');
import { Navbar as BSNavbar } from 'react-bootstrap';

interface NavbarProps {}

export const Navbar: React.FunctionComponent<NavbarProps> = ({}) => {
  return (
    <BSNavbar bg="dark" variant="dark">
      <BSNavbar.Brand>Brand</BSNavbar.Brand>
    </BSNavbar>
  );
};
