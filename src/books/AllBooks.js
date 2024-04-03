import { useState } from "react";
import { Button, Table } from "react-bootstrap";

function AllBooks(props) {
    const [books, setBooks] = useState([]);

    const handleClick = async () => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("http://localhost:8080/api/v1/books", requestOptions)
            .then((response) => response.json())
            .then((result) => setBooks(result))
            .catch((error) => console.error(error));
    };

    return (
        <>
            <Button onClick={handleClick}>All Books</Button>
            {books.length > 0 ? (
                <div style={{maxHeight:"400px",overflowY:"auto"}}>
                <Table bordered hover>
                    <thead className="sticky-top">
                    <tr>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Author List</th>
                        <th>Edition Number</th>
                        <th>Copyright</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map((book) => (
                        <tr key={book.isbn}>
                            <td>{book.isbn}</td>
                            <td>{book.title}</td>
                            {
                                book.authorList.map((author) => {
                                    return (<p>{author.firstName} {author.lastName}</p>)
                                })
                            }
                            <td>{book.editionNumber}</td>
                            <td>{book.copyright}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                </div>
            ) : null}
        </>
    );
}

export default AllBooks;
