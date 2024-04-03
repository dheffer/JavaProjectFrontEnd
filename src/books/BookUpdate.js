import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function BookUpdate({ isbn: initialIsbn, title: initialTitle, authorList: initialAuthorList, editionNumber: initialEditionNumber, copyright: initialCopyright, setBookUpdate }) {
    const [isbn, setIsbn] = useState(initialIsbn);
    const [title, setTitle] = useState(initialTitle);
    const [authorList, setAuthorList] = useState(initialAuthorList);
    const [editionNumber, setEditionNumber] = useState(initialEditionNumber);
    const [copyright, setCopyright] = useState(initialCopyright);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ isbn, title, authorList, editionNumber, copyright }),
            redirect: "follow"
        };

        fetch(`http://localhost:8080/api/v1/books/update?isbn=${isbn}&title=${title}&edition_number=${editionNumber}&copyright=${copyright}&author_id=${authorList}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setIsbn("");
                setTitle("");
                setAuthorList("");
                setEditionNumber("");
                setCopyright("");
                setBookUpdate(result);
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
                <Form.Label>Authors (comma-separated)</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter authors"
                    value={authorList}
                    onChange={(e) => setAuthorList(e.target.value)}
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
                Update Book
            </Button>
        </Form>
    );
}

export default BookUpdate;
