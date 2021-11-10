import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import { NavbarBrand } from "react-bootstrap";
import { Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MainNavbar() {
  return (
    <div>
      <Button>ok</Button>
      <Button variant="primary">Primary</Button>{" "}
      <>
        <br />
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>

              <Nav.Link as={Link} to="/axiocs">
                Axiocs
              </Nav.Link>

              <Nav.Link as={Link} to="/urlaxios">
                Urlaxios
              </Nav.Link>

              <Nav.Link as={Link} to="/dogapi">
                DogAPI
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <br />

        <div class="container ">
          <h4>test</h4>
        </div>
      </>
    </div>
  );
}
