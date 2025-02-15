import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TupperLink from './TupperLink';

export default function ProductsTakeAway(){
    return(
        <Container><Tabs
        defaultActiveKey="tupperlink"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
            <Tab eventKey="tupperlink" title="KeepyLink">
                <TupperLink />
            </Tab>
        </Tabs>
        </Container>
    );
}