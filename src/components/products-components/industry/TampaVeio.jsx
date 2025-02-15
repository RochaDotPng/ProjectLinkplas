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
            <h1 className="fw-bold mb-2 mt-5">Tampa para veio</h1>
            <div className="product-container">
                <div className='product-img-container'>
                    <p>Topo de proteção exterior de veio</p>
                    <ButtonGroup className='mb-4' aria-label="Seleção da dimensão das tampas">
                        <Button onClick={() => { handleSize('16') }} className={size == '16' && ("text-white btn-checked") || ("text-white")} variant="secondary"><i className="bi-diameter"></i> 16mm </Button>
                        <Button onClick={() => { handleSize('20') }} className={size == '20' && ("text-white btn-checked") || ("text-white")} variant="secondary"><i className="bi-diameter"></i> 20mm </Button>
                    </ButtonGroup>
                    <div>
                        <Button onClick={() => handleContactsClick('/Contacts')} className='p-3'>Pedir cotação</Button>
                        <Dropdown className='products-download d-inline'>
                            <Dropdown.Toggle className="p-3 btn-secondary ms-3 text-white" variant="secondary" id="dropdown-basic">
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
                <div className="product-text-container">
                    <img alt='Imagem da perna com uma tampa de veio' className='tampa-veio-img' src='../images/tampa-veio.png'></img>
                </div>
            </div>
        </Container>
    )
}