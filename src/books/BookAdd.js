import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function BookAdd(props) {
    const [isbn, setIsbn] = useState("");
    const [title, setTitle] = useState("");
    const [author_id, setAuthorId] = useState("");
    const [editionNumber, setEditionNumber] = useState("");
    const [copyright, setCopyright] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestOptions = {
            method: "POST",
            redirect: "follow"
        };

        const requestBody = {
            isbn,
            title,
            author_id,
            editionNumber,
            copyright
        };

        fetch(`http://localhost:8080/api/v1/books/add?isbn=${isbn}&title=${title}&edition_number=${editionNumber}&copyright=${copyright}&author_id=${author_id}`, {
            ...requestOptions,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        })
            .then((response) => response.json())
            .then((result) => {
                // Reset form fields
                setIsbn("");
                setTitle("");
                setAuthorId("");
                setEditionNumber("");
                setCopyright("");
                // Update parent component with new book data
                props.setBookAdd(result);
            })
            .catch((error) => console.error(error));
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="isbn">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter ISBN"
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="authorList">
                <Form.Label>Author ID</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter authors"
                    value={author_id}
                    onChange={(e) => setAuthorId(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="editionNumber">
                <Form.Label>Edition Number</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter edition number"
                    value={editionNumber}
                    onChange={(e) => setEditionNumber(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="copyright">
                <Form.Label>Copyright</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter copyright"
                    value={copyright}
                    onChange={(e) => setCopyright(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Book
            </Button>
        </Form>
    );
}

export default BookAdd;
