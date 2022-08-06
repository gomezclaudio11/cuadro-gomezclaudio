
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
          <Navbar.Brand href="#home">enMarcados</Navbar.Brand>
        </Link>
          <Nav className="me-auto">
          <Link to={`/`}>
            <Nav.Link href="#home">Inicio</Nav.Link>
          </Link>
          <Link to="/category/Music">
            <Nav.Link href="#features">Musica</Nav.Link>
          </Link>
          <Link to="/category/Movies">
            <Nav.Link href="#pricing">Peliculas</Nav.Link>
          </Link> 
            <Nav.Link href="#pricing"> < CartWidget />  </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

     </>
  );
}

export default ColorSchemesExample;
