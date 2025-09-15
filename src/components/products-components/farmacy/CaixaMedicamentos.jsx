import { Button, Container, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function CaixaMedicamentos() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return (
        <Container>
            <h1 className="fw-bold mb-4 mt-5">Caixa de medicamentos</h1>
            <div className="product-container-vertical">
                
                {/* Description Section */}
                <div className='product-description-section mb-4'>
                    <p className='mb-4'>Caixa de transporte de medicamentos fabricada em plástico de alta resistência, desenhada para a segurança e conservação de produtos farmacêuticos. Com dimensões otimizadas para facilidade de manuseamento e armazenamento, esta caixa possui um sistema de fecho seguro e é resistente a variações de temperatura e humidade. Ideal para uso em farmácias, hospitais e clínicas, garante a integridade e a qualidade dos medicamentos durante o transporte.</p>
                    
                    <div className="product-actions mb-4">
                        <Button onClick={() => handleContactsClick('/Contacts')} className='p-3'>Pedir cotação</Button>
                    </div>
                </div>

                {/* Features Section */}
                <div className='product-features-section mb-4'>
                    <div className='farmacy-feature-box'>
                        <h5 className='mb-3'>Aplicação fácil</h5>
                        <p>Permite uma fixação instantânea em qualquer posição</p>
                    </div>
                </div>

                {/* Images Section */}
                <div className="product-images-section">
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