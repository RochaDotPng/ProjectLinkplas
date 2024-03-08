import Container from 'react-bootstrap/Container';
import FormCard from './contacts-components/FormCard'
import Card from './contacts-components/Card'
import GreenCard from './contacts-components/GreenCard'

export default function BodyContactsSection() {
    return (
        <div className="contacts-body-container">
            <div className="contacts-body-container-img">
                <Container className="content-container">
                    <div className="card-overlay">
                        <Card />
                    </div>
                    <div className='form-overlay'>
                        <FormCard />
                    </div>
                </Container>

                <div className="green-card-overlay">
                    <Container className='p-0'>
                        <GreenCard />
                    </Container>
                </div>

            </div>
        </div>
    )
}