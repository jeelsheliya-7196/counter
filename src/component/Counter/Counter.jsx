import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import phone1 from '../../../public/image/phone1.jpg';
import phone2 from '../../../public/image/phone2.jpg';
import Qty from '../../component/Qty/Qty'
// import phone1 from '../../../public/image/phone1.jpg';
function Counter() {


  return (
    <div>
        
    <Container>
        <Row xs={1} md={4} className="g-4">
            <Card>
                <Card.Img variant="top" src={phone1} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
               
                <Qty/>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={phone2} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Qty/>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={phone2} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Qty/>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={phone2} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Qty/>
                </Card.Body>
            </Card>
        </Row>
    </Container>
    
    </div>

  );
}

export default Counter;