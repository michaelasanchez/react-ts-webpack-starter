import * as React from "react"

import { Navbar } from 'react-bootstrap'

type HomeProps = {};

export const Home: React.FunctionComponent<HomeProps> = ({ }) => {
  return (
    <Navbar bg="dark">
      <Navbar.Brand>Brand text</Navbar.Brand>
    </Navbar>
  );
}