import Container from 'react-bootstrap/Container';
import FormCard from './contacts-components/FormCard'
import Card from './contacts-components/Card'
import GreenCard from './contacts-components/GreenCard'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function BodyContactsSection() {

    const mapContainerStyle = {
        height: '100vh',
        width: '100%',
    };

    const center = {
        lat: 40.89962330345354,
        lng: -8.43715279187227,
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyCzB2FC7gcUk4ceAPWiDyVSuPn6e7uAygo">
            <div className="contacts-body-container">
                <Container className="content-container">
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        zoom={15}
                        center={center}
                    >
                    </GoogleMap>
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
        </LoadScript>
    )
}