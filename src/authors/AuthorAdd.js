import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function AuthorAdd(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestOptions = {
            method: "POST",
            redirect: "follow"
        };

        fetch(`http://localhost:8080/api/v1/authors/add?first=${firstName}&last=${lastName}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // Reset form fields
                setFirstName("");
                setLastName("");
                // Update parent component with new author data
                props.setAuthorAdd(result);
            })
            .catch((error) => console.error(error));
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Author
            </Button>
        </Form>
    );
}

export default AuthorAdd;
