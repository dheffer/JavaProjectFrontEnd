import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function AuthorUpdate({ id: initialId, firstName: initialFirstName, lastName: initialLastName, setAuthorUpdate }) {
    const [id, setId] = useState(initialId);
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, firstName, lastName }),
            redirect: "follow"
        };

        fetch(`http://localhost:8080/api/v1/authors/update?author_id=${id}&first=${firstName}&last=${lastName}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setId("");
                setFirstName("");
                setLastName("");
                setAuthorUpdate(result);
            })
            .catch((error) => console.error(error));
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="id">
                <Form.Label>ID</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="firstName">
                <Form.Label>New First Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="lastName">
                <Form.Label>New Last Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Update Author
            </Button>
        </Form>
    );
}

export default AuthorUpdate;
