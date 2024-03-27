import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UltraSons from './UltraSons';

export default function ProductsServices(){
    return(
        <Container className='service-height-container'><Tabs
        defaultActiveKey="ultrasons"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
            <Tab eventKey="ultrasons" title="Soldadura de Ultra Sons">
                <UltraSons />
            </Tab>
        </Tabs>
        </Container>
    );
}