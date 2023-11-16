import Card from 'react-bootstrap/Card';

export default function Cards({title, text}){
    return(
        <Card style={{}}>
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