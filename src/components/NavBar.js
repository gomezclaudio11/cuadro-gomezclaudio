
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Link to={`/`}>
          <Navbar.Brand >enMarcados</Navbar.Brand>
        </Link>
          <Nav className="me-auto">
          <Link to={`/`}>
            <Nav.Link >Inicio</Nav.Link>
          </Link>
          <Link to="/category/Music">
            <Nav.Link>Musica</Nav.Link>
          </Link>
          <Link to="/category/Movies">
            <Nav.Link>Peliculas</Nav.Link>
          </Link >
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
