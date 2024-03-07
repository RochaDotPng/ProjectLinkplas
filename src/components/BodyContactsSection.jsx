import Container from 'react-bootstrap/Container';
import Form from './contacts-components/Form'
import Card from './contacts-components/Card'
import GreenCard from './contacts-components/GreenCard'

export default function BodyContactsSection() {
    return (
            <div className="contacts-body-container">
                <div className="contacts-body-container-img">
                <Container className="content-container">
                    <div className="card-overlay">
                        <Card/>
                    </div>
                    <div className='form-overlay'>
                        <Form/>
                    </div>
                </Container>
                <div className="green-card-overlay">
                    <GreenCard/>
                </div>
                </div>
                
            </div>
    )
}