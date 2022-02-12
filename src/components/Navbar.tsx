import React = require('react');
import { Container, Navbar as BSNavbar } from 'react-bootstrap';
import { MemoizedAuthButton } from '.';
import { useAuthState } from '../hooks';
import { strings } from '../shared';

interface NavbarProps {
  authState?: useAuthState;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <BSNavbar bg="dark" variant="dark">
      <Container>
        <BSNavbar.Brand href="#">{strings.navbar.label}</BSNavbar.Brand>
        {!!props.authState && (
          <MemoizedAuthButton authState={props.authState} />
        )}
      </Container>
    </BSNavbar>
  );
};
