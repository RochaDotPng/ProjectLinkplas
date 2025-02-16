import { Button, Container, Table, Dropdown, ButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Anilha() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };

    function downloadFile(filetype, number) {
        switch (filetype) {
            case 'PDF':
                if (size == '16') {
                    download('../files/Anilha/7017030011.pdf', '7017030011.pdf');
                } else {
                    download('../files/Anilha/7017030009.pdf', '7017030009.pdf');
                }
                break;
            case 'DWG':
                if (size == '16') {
                    download('../files/Anilha/7017030011.DWG', '7017030011.DWG');
                } else {
                    download('../files/Anilha/7017030009.DWG', '7017030009.DWG');
                }
                break;
            case 'IGS':
                if (size == '16') {
                    download('../files/Anilha/7017030011.IGS', '7017030011.IGS');
                } else {
                    download('../files/Anilha/7017030009.IGS', '7017030009.IGS');
                }
                break;
            case 'STEP':
                if (size == '16') {
                    download('../files/Anilha/7017030011.STEP', '7017030011.STEP');
                } else {
                    download('../files/Anilha/7017030009.STEP', '7017030009.STEP');
                }
                break;
            case 'SLDPRT':
                if (size == '16') {
                    download('../files/Anilha/7017030011.SLDPRT', '7017030011.SLDPRT');
                } else {
                    download('../files/Anilha/7017030009.SLDPRT', '7017030009.SLDPRT');
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
            <h1 className="fw-bold mb-2 mt-5">Anilha Intercalar</h1>
            <div className="product-container">
                <div className='product-img-container'>
                    <p>Anilhas intercalares POM</p>
                    <div>
                        <Button onClick={() => handleContactsClick('/Contacts')} className='p-3'>Pedir cotação</Button>
                    </div>
                    <img alt='Imagem da anilha intercalar' className='tampa-veio-img' src='../images/anilha_intercalar.png'></img>

                </div>
                <div className="product-text-container display-flex justify-content-end">
                    <div className='table-tampa'>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Diametro Ext</th>
                                    <th>Diametro Int</th>
                                    <th>Espessura</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='fw-bold'>
                                        <Dropdown className=''>
                                            <Dropdown.Toggle className="table-dropdown-button" variant="secondary" id="dropdown-basic">
                                                <span>30014</span>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="../files/Anilha/7017030014.PDF" download >Desenho - PDF</Dropdown.Item>
                                                <Dropdown.Item href="../files/Anilha/7017030014.IGS" download>3D - IGS</Dropdown.Item>
                                                <Dropdown.Item href="../files/Anilha/7017030014.STEP" download>3D - STEP</Dropdown.Item>
                                                <Dropdown.Item href="../files/Anilha/7017030014.SLDPRT" download>3D - SLDPRT</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                    <td>40 mm</td>
                                    <td>9 mm</td>
                                    <td>6 mm</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>
                                    <Dropdown className=''>
                                            <Dropdown.Toggle className="table-dropdown-button" variant="secondary" id="dropdown-basic">
                                                <span>30015</span>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="../files/Anilha/7017030015.PDF" download >Desenho - PDF</Dropdown.Item>
                                                <Dropdown.Item href="../files/Anilha/7017030015.IGS" download>3D - IGS</Dropdown.Item>
                                                <Dropdown.Item href="../files/Anilha/7017030015.STEP" download>3D - STEP</Dropdown.Item>
                                                <Dropdown.Item href="../files/Anilha/7017030015.SLDPRT" download>3D - SLDPRT</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                    <td>60 mm</td>
                                    <td>9 mm</td>
                                    <td>7 mm</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>
                                    <Dropdown className=''>
                                            <Dropdown.Toggle className="table-dropdown-button" variant="secondary" id="dropdown-basic">
                                                <span>30016</span>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="../files/Anilha/7017030016.PDF" download >Desenho - PDF</Dropdown.Item>
                                                <Dropdown.Item href="../files/Anilha/7017030016.IGS" download>3D - IGS</Dropdown.Item>
                                                <Dropdown.Item href="../files/Anilha/7017030016.STEP" download>3D - STEP</Dropdown.Item>
                                                <Dropdown.Item href="../files/Anilha/7017030016.SLDPRT" download>3D - SLDPRT</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                    <td>60 mm</td>
                                    <td>21 mm</td>
                                    <td>7 mm</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                </div>
            </div>
        </Container>
    )
}