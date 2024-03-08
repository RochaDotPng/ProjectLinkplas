import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SustainabilityCard({ src , title , text }) {
    return (
        <Card className='sustainability-card shadow'>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button variant="primary">Saber mais</Button>
            </Card.Body>
        </Card>
    );
}