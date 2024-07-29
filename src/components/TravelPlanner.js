import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import IconButton from './IconButton.js';

export default function TravelPlanner() {

    return (
        <Container className="planner">
            <Row>
                <header>
                    <h1 className="title">Travel Planner</h1>
                </header>
            </Row>
            <Row className="mb-3">
                <h5 class="text-start">Book your trip</h5>
            </Row>
            <Row className="mb-3">
                <Col>
                    <IconButton
                        id="book-flights"
                        title="Flights"
                        address="/icons/plane.png"
                        colour="#007BFF"
                    ></IconButton>
                    <IconButton
                        id="book-hotels"
                        title="Hotels"
                        address="/icons/hotel.png"
                        colour="#FBB200"
                    ></IconButton>
                    <IconButton
                        id="book-trips"
                        title="Trips"
                        address="/icons/glass.png"
                        colour="#F50056"
                    ></IconButton>
                    <IconButton
                        id="book-car"
                        title="Car Hire"
                        address="/icons/electric-car.png"
                        colour="#10bcbc"
                    ></IconButton>
                </Col>
            </Row>
            <Row className="mb-3">
                <h5 class="text-start">Plan your trip</h5>
            </Row>
            <Row className="mb-3">
                <Col>
                    <IconButton
                        id="plan-insurnace"
                        title="Insurance"
                        address="/icons/insurance.png"
                        colour="#FF6800"
                    ></IconButton>
                    <IconButton
                        id="plan-offset"
                        title="Offsets"
                        address="/icons/leaf.png"
                        colour="#2fb746"
                    ></IconButton>
                </Col>
            </Row>
        </Container>
    );
}