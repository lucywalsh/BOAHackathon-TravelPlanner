import Form from 'react-bootstrap/Form';

export default function FormField({ id, fieldRef, placeholder, type, description, error }) {
  
    return (
        <Form.Group controlId={id} className="mb-4">
            <Form.Control
                required
                type={type || 'text'}
                placeholder={placeholder}
                aria-label={placeholder}
                ref={fieldRef}
            />
            <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
            <Form.Text className="text-muted">{description}</Form.Text>
        </Form.Group>
  );
}