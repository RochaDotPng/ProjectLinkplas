import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleContactsClick = (path) => {
    navigate(path);
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary header">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
            <img
              alt="Linkplas"
              src="./images/logo.png"
              width="139"
              height="73"
              className="d-inline-block align-top"
            />
          </Nav.Link>
        </Navbar.Brand>
        <div className="justify-content-end">
          <Nav className="gap-4 me-auto">
            <Nav.Link as={Link} to="/About">
              Sobre
            </Nav.Link>
            <Nav.Link as={Link} to="/Services">
              Serviços
            </Nav.Link>
            <Nav.Link as={Link} to="/Gallery">
              Galeria
            </Nav.Link>
            <Nav.Link as={Link} to="/Policy">
              Politica de Qualidade
            </Nav.Link>
            <Button onClick={() => handleContactsClick('/Contacts')}>Contactos</Button>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}