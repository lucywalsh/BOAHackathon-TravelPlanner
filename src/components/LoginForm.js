import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormField from './FormField.js';

export default function LoginForm() {
    
    const [validated, setValidated] = useState(false);
    const emailField = useRef();
    const passwordField = useRef();
    
    const onSubmit = (event) => {
        console.log("login");

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);

        const email = emailField.current.value;
        const password = passwordField.current.value;

        // log user in
    };

  return (
    <Col className="input-form">
        <header>
          <h1 className="title">Travel Planner</h1>
        </header>
        <Row className="mb-4">
            <Form noValidate validated={validated} onSubmit={onSubmit}>
                <FormField
                    id="emailAddress"
                    fieldRef={emailField}
                    placeholder="Email Address"
                    type="email"
                    error="Please enter your email address"
                ></FormField>
                <FormField
                    id="password"
                    fieldRef={passwordField}
                    placeholder="Password"
                    type="password"
                    error="Please enter your password"
                ></FormField>
                <Button variant="primary" type="submit">Login</Button>
            </Form>
        </Row>
        <Row>
            <Button variant="secondary" type="link" href="/createaccount">Create an Account</Button>
        </Row>
    </Col>
  );
}