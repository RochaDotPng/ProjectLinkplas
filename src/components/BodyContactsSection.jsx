import Container from 'react-bootstrap/Container';
import Form from './contacts-components/Form'
import Card from './contacts-components/Card'

export default function BodyContactsSection() {
    return (
        <>
            <div className="contacts-body-container">
                <div className="contacts-body-container-img1"></div>
                <div className="contacts-body-container-img2"></div>
                <Container className="content-container">
                    <div className='form-overlay'>
                        <Form/>
                    </div>
                    <div className="card-overlay">
                        <Card/>
                    </div>
                    <div className="img-overlay">
                        <img src="./images/contacts-green-overlay.jpg" alt="" />
                    </div>
                </Container>
            </div>
        </>
    )
}