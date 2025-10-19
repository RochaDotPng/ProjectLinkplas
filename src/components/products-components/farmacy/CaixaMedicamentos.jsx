import { Button, Container, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function CaixaMedicamentos() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return (
        <Container>
            <h1 className="fw-bold mb-4 mt-5 text-white">KeepyFarma</h1>
            <div className="product-container-vertical">
                
                {/* Mobile: Images first */}
                <div className="product-images-section mb-4 d-block d-md-none">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="farmacy-image-container">
                                <div className='size-indicator'>
                                    <span>Tamanho grande</span>
                                </div>
                                <img alt='Imagem da caixa de medicamentos maior' className='product-img img-fluid' src='../images/caixa-grande.png'></img>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="farmacy-image-container">
                                <div className='size-indicator'>
                                    <span>Tamanho pequeno com tampa</span>
                                </div>
                                <img alt="Imagem da caixa de medicamentos mais pequena e a tampa" className='product-img img-fluid' src='../images/tampa-caixa.png'></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className='product-description-section mb-4'>
                    <p className='mb-4'>Caixa de transporte de medicamentos fabricada em plástico de alta resistência, desenhada para a segurança e conservação de produtos farmacêuticos. Com dimensões otimizadas para facilidade de manuseamento e armazenamento, esta caixa possui um sistema de fecho seguro e é resistente a variações de temperatura e humidade. Ideal para uso em farmácias, hospitais e clínicas, garante a integridade e a qualidade dos medicamentos durante o transporte.</p>
                    
                    <div className="product-actions mb-4">
                        <Button onClick={() => handleContactsClick('/sontacts')} className='p-3'>Pedir cotação</Button>
                    </div>
                </div>

                {/* Features Section */}

                {/* Desktop: Images after description */}
                <div className="product-images-section d-none d-md-block">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="farmacy-image-container">
                                <div className='size-indicator'>
                                    <span>Tamanho grande</span>
                                </div>
                                <img alt='Imagem da caixa de medicamentos maior' className='product-img img-fluid' src='../images/caixa-grande.png'></img>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="farmacy-image-container">
                                <div className='size-indicator'>
                                    <span>Tamanho pequeno com tampa</span>
                                </div>
                                <img alt="Imagem da caixa de medicamentos mais pequena e a tampa" className='product-img img-fluid' src='../images/tampa-caixa.png'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}