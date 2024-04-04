import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Abracadeira from './Abracadeira'
import Tampa from './Tampa';
import Intercalar from './Intercalar';
import TampaVeio from './TampaVeio';

export default function ProductsIndustry(){
    return(
        <Container><Tabs
        defaultActiveKey="abracadeira"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
            {<Tab eventKey="abracadeira" title="Abraçadeira">
                <Abracadeira />
            </Tab>}
            <Tab eventKey="tampa" title="Tampa">
                <Tampa />
            </Tab>
            <Tab eventKey="intercalar" title="Intercalar">
                <Intercalar />
            </Tab>
            <Tab eventKey="tampa-veio" title="Tampa para veio">
                <TampaVeio />
            </Tab>
        </Tabs>
        </Container>
    );
}