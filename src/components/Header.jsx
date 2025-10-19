import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function Header({ className }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleContactsClick = (path) => {
    navigate(path);
  };

  const [orientation, setOrientation] = useState('portrait');

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setOrientation('landscape');
    } else {
      setOrientation('portrait');
    }
  };

  useEffect(() => {
    // Check orientation on initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Navbar expand="lg" className={`bg-body-tertiary px-4 container header  ${className}`}>
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
            <img
              alt="Linkplas"
              src="../images/logo-text.png"
              height="36"
              className="d-inline-block align-top"
            />
          </Nav.Link>
        </Navbar.Brand>
        <div className="justify-content-end">
          {orientation === 'landscape' && (
            <Nav className="gap-4 me-auto">
              <Nav.Link
                as={Link}
                to="/Products/Farmaceutica"
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
          )}
          {orientation === 'portrait' && (
            <>
              <a onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
              </a>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <img
                      alt="Linkplas"
                      src="../images/logo.png"
                      width="139"
                      height="73"
                      className="d-inline-block align-top"
                    />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="me-auto justify-content-between full-height">
                    <div className='d-flex flex-column gap-2'>
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
                    </div>
                    <Button onClick={() => handleContactsClick('/Contacts')}>Contactos</Button>
                  </Nav>
                </Offcanvas.Body>
              </Offcanvas>
            </>
          )}
        </div>
      </Container>
    </Navbar>
  );
}