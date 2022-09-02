
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Categories from './Categories';






function ColorSchemesExample() {
  return (
 
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top"  >
          <Container>
            <Link to={`/`}>
              <Navbar.Brand ><strong>enMarcados</strong></Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto container-fluid" >
            <ul className="navbar-nav me-auto">
                <Categories />
            </ul>
            
              <Link to="/cart"> 
                <Nav.Link > < CartWidget />  </Nav.Link>
              </Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
     
     
  );
}

export default ColorSchemesExample;
