import Card from 'react-bootstrap/Card';

export default function Cards({title, text}){
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Card.Link href="#" className='card-link'>Ver mais</Card.Link>
      </Card.Body>
    </Card>
    )
}