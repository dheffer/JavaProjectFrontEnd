import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

function BookByIsbn(props) {
    const [deleted, setDeleted] = useState(false);

    const handleClick = async () => {
        let isbn = document.querySelector("input[name=isbn]").value;

        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(`http://localhost:8080/api/v1/books/${isbn}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                props.setBookByIsbn([result]);
            })
            .catch((error) => console.error(error));
    };

    const handleDelete = async () => {
        let isbn = props.bookByIsbn[0].isbn;
        console.log(props.bookByIsbn[0].isbn);

        const requestOptions = {
            method: "DELETE",
            redirect: "follow",
        };

        fetch(`http://localhost:8080/api/v1/books/delete?isbn=${isbn}`, requestOptions)
            .then((response) => {
                if (response.ok) {
                    setDeleted(true);
                    props.setBookByIsbn([]);
                } else {
                    console.error("Error deleting book");
                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            <input type="text" name="isbn" placeholder="ISBN" />
            <Button onClick={handleClick}>Search</Button>
            {props.bookByIsbn.length > 0 ? (
                <>
                    <Table bordered hover>
                        <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Title</th>
                            <th>Author</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr key={"byIsbn-" + props.bookByIsbn[0].isbn}>
                            <td>{props.bookByIsbn[0].isbn}</td>
                            <td>{props.bookByIsbn[0].title}</td>
                            {props.bookByIsbn[0].authorList.map((author, index) => (
                                <td key={index}>{author.firstName} {author.lastName}</td>
                            ))}
                            <Button variant="danger" onClick={handleDelete}>
                                Delete Book
                            </Button>
                        </tr>
                        </tbody>
                    </Table>
                </>
            ) : null}
        </>
    );
}

export default BookByIsbn;
