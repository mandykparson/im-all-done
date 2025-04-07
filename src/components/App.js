import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <div className="app-wrapper">
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="home">I'm All Done</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="get-started">Get Started</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="main-content">
        <Container className="text-center">
          <h1>Hello</h1>
        </Container>
      </main>

      <footer className="footer bg-dark text-light text-center py-3">
        <Container>
          <span>&copy; {new Date().getFullYear()} I'm All Done. All rights reserved.</span>
        </Container>
      </footer>
    </div>
  );
}

export default App;
