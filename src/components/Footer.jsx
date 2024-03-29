import { Container, Tooltip, OverlayTrigger } from 'react-bootstrap';

export default function Footer() {
    const renderTooltip = (tooltipText) => (
        <Tooltip id="button-tooltip">
            {tooltipText}
        </Tooltip>
    );


    return (
        <footer id='footerComponent' className='overflow-hidden'>
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
                            <OverlayTrigger
                                placement="left"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip(" (+351) 256 601 535 ")}
                            >
                                <i className="bi bi-telephone-fill"></i>
                            </OverlayTrigger>
                            <p>(+351) 256 601 535</p>
                        </div>
                        <div className="icon-container">
                            <OverlayTrigger
                                placement="left"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip(" Rua António Gomes Correia Junior Oliveira de Azeméis ")}
                            >
                                <i className="bi bi-geo-alt-fill"></i>
                            </OverlayTrigger>
                            <p>Rua António Gomes Correia Junior Oliveira de Azeméis</p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="footer-down">
                <Container className='footer-down-container'>
                    <span>Todos os direitos reservados a www.linkplas.pt &copy;2024</span>
                </Container>
            </div>
        </footer>
    )
}