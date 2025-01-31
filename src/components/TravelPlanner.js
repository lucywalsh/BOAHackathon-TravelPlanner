import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import IconButton from './IconButton.js';
import ModalButton from './ModalButton.js';
import Button from 'react-bootstrap/Button';
import { useUser } from '../contexts/User.js'; 

export default function TravelPlanner() {
    const { user, logout } = useUser();
    let showNWGOffers = false;
    if(user!==null){
        showNWGOffers = user.NWGCustomer;
    }

    return (
        <Container className="planner">
            <Row>
                <h1 className="title">Travel Planner</h1>
            </Row>
            <Row className="mb-3">
                <h5 class="text-start">Book your trip</h5>
            </Row>
            {showNWGOffers && <ModalButton
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
                        alt_text="Book flights"
                        address="/icons/plane.png"
                        colour="#0071EB"
                    ></IconButton>
                    <IconButton
                        id="book-hotels"
                        title="Hotels"
                        alt_text="Book hotels"
                        address="/icons/hotel.png"
                        colour="#5928ed"
                    ></IconButton>
                    <IconButton
                        id="book-car"
                        title="Car Hire"
                        alt_text="Book car hire"
                        address="/icons/electric-car.png"
                        colour="#7b4ae9"
                    ></IconButton>
                    <IconButton
                        id="book-trips"
                        title="Trips"
                        alt_text="Book trips"
                        address="/icons/glass.png"
                        colour="#b51963"
                    ></IconButton>
                </Col>
            </Row>
            <Row className="mb-3">
                <h5 class="text-start">Plan your trip</h5>
            </Row>
            {showNWGOffers && <ModalButton
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
                        alt_text="Purchase insurance"
                        address="/icons/insurance.png"
                        colour="#7327b6"
                    ></IconButton>
                    <IconButton
                        id="plan-offset"
                        title="Offsets"
                        alt_text="Purchase carbon offsets"
                        address="/icons/leaf.png"
                        colour="#257846"
                    ></IconButton>
                </Col>
            </Row>
            {!showNWGOffers && 
            <Row className='mb-4'>
                <p className="subheading">Are you a NatWest, RBS or Ulster Bank Customer?</p>
                <p>Login via your bank for exclusive offers and ways to pay</p>
                <Button variant="primary" style={{backgroundColor:'#9f04ed', borderColor:'#9f04ed', width:'40vh', margin:'0 auto'}}>Login securely via your bank</Button>
            </Row>}
            <Row>
            <Button variant="secondary" style={{width:'40vh', margin:'0 auto'}} onClick={logout} href='login'>Logout</Button>
            </Row>
        </Container>
    );
}