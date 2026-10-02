import { Button, Container, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function CaixaMedicamentos() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return (
        <Container>
            <h1 className="fw-bold mb-24 mt-48 text-white product-page-title">PharmaLink</h1>
            <div className="product-container-vertical">
                
                {/* Mobile: Images first */}
                <div className="product-images-section mb-24 d-block d-md-none">
                    <div className="row">
                        <div className="col-md-6 mb-16">
                            <div className="farmacy-image-container">
                                <div className='size-indicator'>
                                    <span>Tamanho grande</span>
                                </div>
                                <img alt='Imagem da caixa de medicamentos (tamanho grande)' className='product-img img-fluid' src='/images/caixa-grande.png'></img>
                            </div>
                        </div>
                        <div className="col-md-6 mb-16">
                            <div className="farmacy-image-container">
                                <div className='size-indicator'>
                                    <span>Tamanho médio</span>
                                </div>
                                <img alt="Imagem da caixa de medicamentos (tamanho médio)" className='product-img img-fluid' src='/images/keepyfarma-white.png'></img>
                            </div>
                        </div>
                        <div className="col-md-6 mb-16">
                            <div className="farmacy-image-container">
                                <div className='size-indicator'>
                                    <span>Tamanho pequeno</span>
                                </div>
                                <img alt="Imagem da caixa de medicamentos (tamanho pequeno) com tampa" className='product-img img-fluid' src='/images/caixa-pequena.png'></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tampa — após as caixas (mobile) */}
                <section
                    className="keepyfarma-tampa-showcase mb-24 d-block d-md-none"
                    aria-labelledby="pharmalink-tampa-heading-mobile"
                >
                    <h2 id="pharmalink-tampa-heading-mobile" className="h4 text-white fw-semibold mb-16">
                        Tampa
                    </h2>
                    <div className="row g-16">
                        <div className="col-md-6">
                            <div className="farmacy-image-container">
                                <div className="size-indicator">
                                    <span>Tampa em plástico</span>
                                </div>
                                <img
                                    src="/images/TampaPlastico.png"
                                    alt="Tampa exterior em plástico para caixa de medicamentos PharmaLink"
                                    className="product-img img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="farmacy-image-container">
                                <div className="size-indicator">
                                    <span>Tampa na caixa</span>
                                </div>
                                <img
                                    src="/images/tampa-caixa.png"
                                    alt="Tampa aplicada à caixa de medicamentos PharmaLink"
                                    className="product-img img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Description Section */}
                <div className='product-description-section mb-24'>
                    <p className='mb-24'>Caixa de transporte de medicamentos fabricada em plástico de alta resistência, desenhada para a segurança e conservação de produtos farmacêuticos. Com dimensões otimizadas para facilidade de manuseamento e armazenamento, esta caixa possui um sistema de fecho seguro e é resistente a variações de temperatura e humidade. Ideal para uso em farmácias, hospitais e clínicas, garante a integridade e a qualidade dos medicamentos durante o transporte.</p>
                    
                    <div className="product-actions mb-24">
                        <Button onClick={() => handleContactsClick('/Contacts')} className='p-16'>Pedir cotação</Button>
                    </div>
                </div>

                {/* Desktop: Images after description */}
                <div className="product-images-section d-none d-md-block">
                    <div className="row">
                        <div className="col-md-6 mb-16">
                            <div className="farmacy-image-container">
                                <div className='size-indicator'>
                                    <span>Tamanho grande</span>
                                </div>
                                <img alt='Imagem da caixa de medicamentos (tamanho grande)' className='product-img img-fluid' src='/images/caixa-grande.png'></img>
                            </div>
                        </div>
                        <div className="col-md-6 mb-16">
                            <div className="farmacy-image-container">
                                <div className='size-indicator'>
                                    <span>Tamanho médio</span>
                                </div>
                                <img alt="Imagem da caixa de medicamentos (tamanho médio)" className='product-img img-fluid' src='/images/keepyfarma-white.png'></img>
                            </div>
                        </div>
                        <div className="col-md-6 mb-16">
                            <div className="farmacy-image-container">
                                <div className='size-indicator'>
                                    <span>Tamanho pequeno</span>
                                </div>
                                <img alt="Imagem da caixa de medicamentos (tamanho pequeno) com tampa" className='product-img img-fluid' src='/images/caixa-pequena.png'></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tampa — após as caixas (desktop) */}
                <section
                    className="keepyfarma-tampa-showcase mb-24 d-none d-md-block"
                    aria-labelledby="pharmalink-tampa-heading-desktop"
                >
                    <h2 id="pharmalink-tampa-heading-desktop" className="h4 text-white fw-semibold mb-16">
                        Tampa
                    </h2>
                    <div className="row g-16">
                        <div className="col-md-6">
                            <div className="farmacy-image-container">
                                <div className="size-indicator">
                                    <span>Tampa em plástico</span>
                                </div>
                                <img
                                    src="/images/TampaPlastico.png"
                                    alt="Tampa exterior em plástico para caixa de medicamentos PharmaLink"
                                    className="product-img img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="farmacy-image-container">
                                <div className="size-indicator">
                                    <span>Tampa na caixa</span>
                                </div>
                                <img
                                    src="/images/tampa-caixa.png"
                                    alt="Tampa aplicada à caixa de medicamentos PharmaLink"
                                    className="product-img img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    )
}