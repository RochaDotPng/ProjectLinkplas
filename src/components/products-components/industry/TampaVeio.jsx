import { Button, Container, Dropdown, ButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function TampaVeio() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };

    const [size, setSize] = useState('20');

    function handleSize(newSize) {
        setSize(newSize);
        console.log(newSize);
    }

    function downloadFile(filetype) {
        switch (filetype) {
            case 'DWG':
                download('../files/TampaVeio/7017030011.DWG','7017030011.DWG');
                break;
            case 'IGS':
                download('../files/TampaVeio/7017030011.IGS','7017030011.IGS')
                break;
            case 'STEP':
                download('../files/TampaVeio/7017030011.STEP','7017030011.STEP')
                break;
            case 'SLDPRT':
                download('../files/TampaVeio/7017030011.SLDPRT','7017030011.SLDPRT')
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
                    <p>Uma tampa para os veios</p>
                    <ButtonGroup className='mb-4' aria-label="Seleção da dimensão das tampas">
                        <Button onClick={() => { handleSize('20') }} className={size == '20' && ("text-white btn-checked") || ("text-white")} variant="secondary">20mm <i className="bi bi-arrows-expand-vertical"></i></Button>
                        <Button onClick={() => { handleSize('24') }} className={size == '24' && ("text-white btn-checked") || ("text-white")} variant="secondary">24mm <i className="bi bi-arrows-expand-vertical"></i></Button>
                        <Button onClick={() => { handleSize('30') }} className={size == '30' && ("text-white btn-checked") || ("text-white")} variant="secondary">30mm <i className="bi bi-arrows-expand-vertical"></i></Button>
                    </ButtonGroup>
                    <div>
                        <Button onClick={() => handleContactsClick('/Contacts')} className='p-3'>Pedir cotação</Button>
                        <Dropdown className='products-download d-inline'>
                            <Dropdown.Toggle className="p-3 btn-secondary ms-3 text-white" variant="secondary" id="dropdown-basic">
                                <span>Descarregar</span><i className='text-white ms-2 bi bi-download'></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
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