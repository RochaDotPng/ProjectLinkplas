import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProductsFarmacy from './CaixaMedicamentos';

export default function ProductsFarmacy(){
    return(
        <Container><Tabs
        defaultActiveKey="caixa"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
            <Tab eventKey="caixa" title="Caixa de medicamentos">
                <ProductsFarmacy />
            </Tab>
        </Tabs>
        </Container>
    );
}