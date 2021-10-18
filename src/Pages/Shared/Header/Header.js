import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <>
        <Navbar
          bg="dark"
          variant="dark"
          collapseOnSelect
          expand="lg"
          className="fixed-top"
        >
          <Container>
            <Navbar.Brand href="#home">Genius</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={HashLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#experts">
                Experts
              </Nav.Link>
              {user?.email ? (
                <Button onClick={logOut} variant="light">
                  LogOut
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Log in
                </Nav.Link>
              )}
              <Navbar.Text>
                Signed in as: <a href="#login">{user?.displayName}</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
