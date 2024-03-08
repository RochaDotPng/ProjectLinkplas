import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header({className}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactsClick = (path) => {
    navigate(path);
  };
  return (
    <Navbar expand="lg" className={`bg-body-tertiary header ${className}`}>
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
            <img
              alt="Linkplas"
              src= "../images/logo.png"
              width="139"
              height="73"
              className="d-inline-block align-top"
            />
          </Nav.Link>
        </Navbar.Brand>
        <div className="justify-content-end">
          <Nav className="gap-4 me-auto">
          <Nav.Link
              as={Link}
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Início
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Products/Industria"
              className={`nav-link ${location.pathname.includes('/Products') ? 'active' : ''}`}
            >
              Produtos
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Policy"
              className={`nav-link ${location.pathname === '/Policy' ? 'active' : ''}`}
            >
              Politica de Qualidade
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/About"
              className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`}
            >
              Sobre
            </Nav.Link>
            <Button onClick={() => handleContactsClick('/Contacts')}>Contactos</Button>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}