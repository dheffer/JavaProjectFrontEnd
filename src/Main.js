import {Button, Table} from "react-bootstrap";
import {useState} from "react";
import AllAuthors from "./authors/AllAuthors";
import AuthorById from "./authors/AuthorById";
import AuthorAdd from "./authors/AuthorAdd";
import AuthorUpdate from "./authors/AuthorUpdate";
import AllBooks from "./books/AllBooks";
import BookByIsbn from "./books/BookByIsbn";
import BookAdd from "./books/BookAdd";
import BookUpdate from "./books/BookUpdate";

function Main(props) {
    // BOOKS
    const [allBooks, setAllBooks] = useState([]);
    const [bookByIsbn, setBookByIsbn] = useState([]);
    const [bookAdd, setBookAdd] = useState([]);
    const [bookUpdate, setBookUpdate] = useState([]);
    const [bookDelete, setBookDelete] = useState([]);

    // AUTHORS
    const [allAuthors, setAllAuthors] = useState([]);
    const [authorById, setAuthorById] = useState([]);
    const [authorAdd, setAuthorAdd] = useState([]);
    const [authorUpdate, setAuthorUpdate] = useState([]);
    const [authorDelete, setAuthorDelete] = useState([]);

    return (
        <>
            <h1>Java Project Frontend</h1>
            <Table bordered hover>
                <tbody >
                <tr>
                    <td><AllBooks allBooks={allBooks} setALlBooks={setAllBooks} /></td>
                    <td><BookByIsbn bookByIsbn={bookByIsbn} setBookByIsbn={setBookByIsbn} /></td>
                    <td><BookAdd bookAdd={bookAdd} setBookAdd={setBookAdd} /></td>
                    <td><BookUpdate bookUpdate={bookUpdate} setBookUpdate={setBookUpdate}/></td>
                </tr>
                <tr>
                    <td><AllAuthors active={allAuthors} setActive={setAllAuthors}/></td>
                    <td><AuthorById active={authorById} setActive={setAuthorById}/></td>
                    <td><AuthorAdd authorAdd={authorAdd} setAuthorAdd={setAuthorAdd} /></td>
                    <td><AuthorUpdate authorUpdate={authorUpdate} setAuthorUpdate={setAuthorUpdate}/></td>
                </tr>
                </tbody>
            </Table>
        </>
    );
}

export default Main;
