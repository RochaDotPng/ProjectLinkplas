import Nav from 'react-bootstrap/Nav';

export default function Footer() {
    return (
        <footer>
            <div className="footer-up">
                <img src="./images/logo-light.png"></img>
                <div className='socials'>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-linkedin"></i>
                </div>
                <div className="icon-container">
                    <i className="bi bi-envelope-fill"></i>
                    <p>geral@linkplas.pt</p>
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
            <div className="footer-down">
                <p>Copyright &copy;2023</p>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="" className="footer-link">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="" className="footer-link">Link</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </footer>
    )
}