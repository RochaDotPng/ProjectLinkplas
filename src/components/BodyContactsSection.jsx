import Container from 'react-bootstrap/Container';
import FormCard from './contacts-components/FormCard'
import Card from './contacts-components/Card'
import GreenCard from './contacts-components/GreenCard'

export default function BodyContactsSection() {

    return (
        <>
            <div className="green-card-overlay pt-2">
                <Container className='p-0 pt-5'>
                    <GreenCard />
                </Container>
            </div>
            <div className="contacts-body-container">
                <div className='map-class'>
                <iframe 
                    height="100%" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.586093549102!2d-8.438720483603221!3d40.89966268682006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd237ed703882dd3%3A0x16733d3c12b4f9b0!2slinkplas!5e0!3m2!1sen!2spt!4v1499089683867" 
                    style={{ border: '0', width: '100%', height: '100%', position: 'absolute' }}
                    allowFullScreen=""></iframe>
                </div>
                <Container className="content-container">
                    <div className="card-overlay">
                        <Card />
                    </div>
                    <div className='form-overlay'>
                        <FormCard />
                    </div>
                </Container>

            </div>
        </>
    )
}