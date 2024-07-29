import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function TravelPlanner() {

    return (
        <Container className="planner">
            <Row>
                <header>
                    <h1 className="title">Travel Planner</h1>
                </header>
            </Row>
            <Row>
                <h3 class="text-start">Book your trip</h3>
            </Row>
            <Row>
                <h3 class="text-start">Plan your trip</h3>
            </Row>
        </Container>
    );
}