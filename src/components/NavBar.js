
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">enMarcados</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Musica</Nav.Link>
            <Nav.Link href="#pricing">Peliculas</Nav.Link>
            <Nav.Link href="#pricing">Urbanismo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default ColorSchemesExample;
