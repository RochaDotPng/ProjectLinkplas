import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

export default function Footer() {
    return (
        <footer>
            <div className="footer-up">
                <Container className='footer-up-container'>
                    <div className='socials d-flex align-items-center'>
                        <img alt="Logo linkplas" src="../images/logo-light.png"></img>
                    </div>
                    <div className="icon-big-container">
                        <div className="icon-container">
                            <a href='https://www.facebook.com/p/LinkplasLda-100057181310945'>
                                <i className="bi bi-facebook"></i>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href='https://www.linkedin.com/company/linkplaspt/'>
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href='mailto:geral@linkplas.pt'>
                                <i className="bi bi-envelope-fill"></i>
                                <p>geral@linkplas.pt</p>
                            </a>
                        </div>
                        <div className="icon-container">
                            <i className="bi bi-telephone-fill"></i>
                            <p>(+351) 256 601 535</p>
                        </div>
                        <div className="icon-container">
                            <i className="bi bi-geo-alt-fill"></i>
                            <p>Rua António Gomes Correia Junior Oliveira de Azeméis</p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="footer-down">
                <Container className='footer-down-container'>
                    <span>Todos os direitos reservados a www.linkplas.pt &copy;2023</span>
                    {/*<Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="" className="footer-link">Politica de Privacidade</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="" className="footer-link">Termos e Condições</Nav.Link>
                        </Nav.Item>
    </Nav>*/}
                </Container>
            </div>
        </footer>
    )
}