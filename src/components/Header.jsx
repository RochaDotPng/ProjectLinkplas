import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Linkplas"
            src="./logo.png"
            width="139"
            height="73"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <div className="justify-content-end">
          <Nav className="gap-4 me-auto">
            <Nav.Link href="#home">Sobre</Nav.Link>
            <Nav.Link href="#link">Serviços</Nav.Link>
            <Nav.Link href="#link">Galeria</Nav.Link>
            <Nav.Link href="#link">Politica de Qualidade</Nav.Link>
            <Button>Contactos</Button>
          </Nav>
        </div> 
      </Container>
    </Navbar>
  );
}