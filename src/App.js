import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

function App() {

  {/*const [message, setMessage] = useState("");
  *useEffect(() => {
    fetch("/hello").then(res => res.json()).then(data => {
      setMessage(data.message);
    });
  }, []);*/}

  return (
    <Container fluid className="App">
        <header>
          <h1 className="title">Travel Planner</h1>
        </header>
    </Container>
  );
}

export default App;
