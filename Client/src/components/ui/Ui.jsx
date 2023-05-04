import Form from 'react-bootstrap/Form'
export const Input = ({ label, placeholder, err, type }) => {
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Label>{label}</Form.Label>

            <Form.Control type={type} placeholder={placeholder} />

            <Form.Text className="text-muted">{err}</Form.Text>

        </Form.Group>
    )
}


