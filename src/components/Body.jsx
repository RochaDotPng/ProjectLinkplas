import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavSection from './NavSection';
import FluidImage from './common/FluidImage';

function Body() {
  return (
    <>
    <NavSection />
    <div>
        <FluidImage source='../company-front.jpg'></FluidImage>
    </div>
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    </>
  );
}

export default Body;