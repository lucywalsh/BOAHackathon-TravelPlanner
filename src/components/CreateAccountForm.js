import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormField from './FormField.js';

export default function LoginForm() {
    
    const [validated, setValidated] = useState(false);
    const emailField = useRef();
    const firstNameField = useRef();
    const surnameField = useRef();
    const DOBField = useRef();
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
        const firstName = firstNameField.current.value;
        const surname = surnameField.current.value;
        const dateOfBirth = DOBField.current.value;
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
                    error="Please enter a valid email address"
                ></FormField>
                <FormField
                    id="firstName"
                    fieldRef={firstNameField}
                    placeholder="First Name(s)"
                    type="text"
                    error="Please enter your first name(s)"
                ></FormField>
                <FormField
                    id="surname"
                    fieldRef={surnameField}
                    placeholder="Surname(s)"
                    type="text"
                    error="Please enter your surname(s)"
                ></FormField>
                <FormField
                    id="dateOfBirth"
                    fieldRef={DOBField}
                    placeholder="Date of Birth"
                    description="We only use this to confirm your age and identity when required, we'll never share it"
                    type="date"
                    error="Please enter your date of birth"
                ></FormField>
                <FormField
                    id="password"
                    fieldRef={passwordField}
                    placeholder="Password"
                    type="password"
                    error="Please enter a password"
                ></FormField>
                <Button variant="primary" type="submit">Create Account</Button>
            </Form>
        </Row>
        <Row>
            <Button variant="secondary" type="link" href="/login">Back to Login</Button>
        </Row>
    </Col>
  );
}