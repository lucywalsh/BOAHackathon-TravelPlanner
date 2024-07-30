import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import IconButton from './IconButton.js';
import ModalButton from './ModalButton.js';
import Button from 'react-bootstrap/Button';

export default function TravelPlanner() {
    //TODO: pass NWCustomer in as a prop
    const [NWGCustomer, setNWGCustomer] = useState(true);

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
            {NWGCustomer && <ModalButton
                buttonText="Set up one-click payments"
                modalTitle="Quick, easy and secure payments for all your travel needs"
                modalBody={<div>
                    <p>Set up a Variable Recurring Payments mandate with your bank today to pay for flights, hotels, trips and more in one-click</p>
                    <ul>
                        <li>Set up in seconds in your banking app</li>
                        <li>Secure payments directly from your bank account, no need to input card details</li>
                        <li>Your purchases are protected by NatWest</li>
                    </ul>
                </div>}
                linkButtonText="Set up now"
            ></ModalButton>}
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
            {NWGCustomer && <ModalButton
                buttonText="Apply for a Travel Rewards Credit Card"
                modalTitle="Get Rewards when you spend on holidays abroad and at home"
                modalBody={<div>
                    <p>With NatWest's Travel Reward Credit Card, you'll earn Rewards:</p>
                    <ul>
                        <li>1% back on eligible travel spending on planes, trains, car rental, ferries, buses, hotel accommodation, travel agents, cruises, campsites and more.</li>
                        <li>1% to 15% at selected partner retailers.</li>
                        <li>Or, instead of these, 0.1% back everywhere else.</li>
                        <li>No foreign transaction fees on purchases abroad.</li>
                        <li>No annual fee.</li>
                    </ul>
                </div>}
                linkButtonText="Apply now"
                externalLink="https://www.natwest.com/credit-cards/travel-reward-credit-card.html"
            ></ModalButton>}
            <Row className="mb-5">
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
            {!NWGCustomer && 
            <Row>
                <p className="subheading">Are you a NatWest, RBS or Ulster Bank Customer?</p>
                <p>Login via your bank for exclusive offers and ways to pay</p>
                <Button variant="primary" style={{backgroundColor:'#9f04ed', borderColor:'#9f04ed', width:'40vh', margin:'0 auto'}}>Login securely via your bank</Button>
            </Row>}
        </Container>
    );
}