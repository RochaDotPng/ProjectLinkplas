import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Abracadeira from '../components/products-components/Abracadeira'
import Tampa from '../components/products-components/Tampa';
import Intercalar from './products-components/Intercalar';

export default function ProductsIndustry(){
    return(
        <Container><Tabs
        defaultActiveKey="abracadeira"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
            <Tab eventKey="abracadeira" title="Abraçadeira">
                <Abracadeira />
            </Tab>
            <Tab eventKey="tampa" title="Tampa">
                <Tampa />
            </Tab>
            <Tab eventKey="intercalar" title="Intercalar">
                <Intercalar />
            </Tab>
        </Tabs>
        </Container>
    );
}