import { Button } from "react-bootstrap";

export default function IconButton( {id, title, address, colour }) {
    return(
        <Button controlId={id} className='icon-button' style={{backgroundColor:colour, borderColor:colour}}>
            <p className="icon-title">{title}</p>
            <img className='icon' src={address}></img>
        </Button>
    );
}