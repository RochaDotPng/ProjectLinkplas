import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Abracadeira from '../components/products-components/Abracadeira'

export default function ProductsIndustry(){
    return(
        <Container><Tabs
        defaultActiveKey="abracadeira"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
            <Tab eventKey="abracadeira" title="Abraçadeira">
                <Abracadeira></Abracadeira>
            </Tab>
            <Tab eventKey="tampa" title="Tampa">
                Tab content for Tampa
            </Tab>
        </Tabs>
        </Container>
    );
}