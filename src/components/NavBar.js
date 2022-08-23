
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Categories from './Categories';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Link to={`/`}>
          <Navbar.Brand >enMarcados</Navbar.Brand>
        </Link>
          <Nav className="me-auto">
          <ul className="navbar-nav me-auto">
            <Categories />
            </ul >
          <Link to="/cart"> 
            <Nav.Link> < CartWidget />  </Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>

     </>
  );
}

export default ColorSchemesExample;
