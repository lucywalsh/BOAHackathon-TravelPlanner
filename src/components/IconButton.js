import { Button } from "react-bootstrap";

export default function IconButton( {id, title, alt_text, address, colour }) {
    return(
        <Button controlId={id} className='icon-button' style={{backgroundColor:colour, borderColor:colour}}>
            <p id='icon=title' className="icon-title">{title}</p>
            <img className='icon' src={address} alt={alt_text} aria-labelledby="icon-title"></img>
        </Button>
    );
}