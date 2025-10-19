import { Button, Container, Dropdown, ButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function TampaVeio() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };

    const [size, setSize] = useState('16');

    function handleSize(newSize) {
        setSize(newSize);
        console.log(newSize);
    }

    function downloadFile(filetype) {
        switch (filetype) {
            case 'PDF':
                if(size=='16'){
                    download('../files/TampaVeio/7017030011.pdf','7017030011.pdf');
                } else {
                    download('../files/TampaVeio/7017030009.pdf','7017030009.pdf');
                }
                break;
            case 'DWG':
                if(size=='16'){
                    download('../files/TampaVeio/7017030011.DWG','7017030011.DWG');
                } else {
                    download('../files/TampaVeio/7017030009.DWG','7017030009.DWG');
                }
                break;
            case 'IGS':
                if(size=='16'){
                    download('../files/TampaVeio/7017030011.IGS','7017030011.IGS');
                } else {
                    download('../files/TampaVeio/7017030009.IGS','7017030009.IGS');
                }
                break;
            case 'STEP':
                if(size=='16'){
                    download('../files/TampaVeio/7017030011.STEP','7017030011.STEP');
                } else {
                    download('../files/TampaVeio/7017030009.STEP','7017030009.STEP');
                }
                break;
            case 'SLDPRT':
                if(size=='16'){
                    download('../files/TampaVeio/7017030011.SLDPRT','7017030011.SLDPRT');
                } else {
                    download('../files/TampaVeio/7017030009.SLDPRT','7017030009.SLDPRT');
                }
                break;
            default:
                console.log('Clicked button doesnt exist.');
        }
    }

    function download(url, filename) {
        const anchor = document.createElement('a');
        anchor.href = url;

        anchor.download = filename;


        document.body.appendChild(anchor); 
        anchor.click();
        document.body.removeChild(anchor);
    }

    return (
        <Container>
            <h1 className="fw-bold mb-4 mt-5 text-white">Tampa para veio</h1>
            <div className="product-container-vertical">
                
                {/* Mobile: Images first */}
                <div className="product-images-section mb-4 d-block d-md-none">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="text-center">
                                <img alt='Imagem da perna com uma tampa de veio' className='product-img img-fluid' src='../images/tampa-veio.png'></img>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="text-center">
                                <img alt='Imagem da tampa de veio em uso' className='product-img img-fluid tampa-veio-uso' src='../images/tampa-veio-uso.png'></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className='product-description-section mb-4'>
                    <p className="mb-4">Topo de proteção exterior de veio</p>
                    
                    {/* Size Selection */}
                    <div className="mb-4">
                        <h6 className="mb-3">Selecione a dimensão:</h6>
                        <ButtonGroup aria-label="Seleção da dimensão das tampas">
                            <Button onClick={() => { handleSize('16') }} className={size == '16' && ("text-white btn-checked") || ("text-white")} variant="secondary"><i className="bi-diameter"></i> 16mm </Button>
                            <Button onClick={() => { handleSize('20') }} className={size == '20' && ("text-white btn-checked") || ("text-white")} variant="secondary"><i className="bi-diameter"></i> 20mm </Button>
                        </ButtonGroup>
                    </div>
                    
                    <div className="product-actions mb-4">
                        <Button onClick={() => handleContactsClick('/Contacts')} className='p-3 me-3'>Pedir cotação</Button>
                        <Dropdown className='products-download d-inline'>
                            <Dropdown.Toggle className="p-3 btn-secondary text-white" variant="secondary" id="dropdown-basic">
                                <span>Descarregar</span><i className='text-white ms-2 bi bi-download'></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#!" onClick={() => downloadFile('PDF')} >Desenho - PDF </Dropdown.Item>
                                <Dropdown.Item href="#!" onClick={() => downloadFile('DWG')} >2D - DWG </Dropdown.Item>
                                <Dropdown.Item href="#!" onClick={() => downloadFile('IGS')} >3D - IGS</Dropdown.Item>
                                <Dropdown.Item href="#!" onClick={() => downloadFile('STEP')} >3D - STEP</Dropdown.Item>
                                <Dropdown.Item href="#!" onClick={() => downloadFile('SLDPRT')} >3D - SLDPRT</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                {/* Desktop: Images after description */}
                <div className="product-images-section d-none d-md-block">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="text-center">
                                <img alt='Imagem da perna com uma tampa de veio' className='product-img img-fluid' src='../images/tampa-veio.png'></img>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="text-center">
                                <img alt='Imagem da tampa de veio em uso' className='product-img img-fluid tampa-veio-uso' src='../images/tampa-veio-uso.png'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}