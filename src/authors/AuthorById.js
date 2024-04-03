import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

function AuthorById(props) {
    const [deleted, setDeleted] = useState(false);

    const handleClick = async () => {
        let id = parseInt(document.querySelector("input[name=authorId]").value);

        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("http://localhost:8080/api/v1/authors/" + id, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                props.setActive([result]);
            })
            .catch((error) => console.error(error));
    };

    const handleDelete = async () => {
        let id = props.active[0].id;

        const requestOptions = {
            method: "DELETE",
            redirect: "follow",
        };

        fetch(`http://localhost:8080/api/v1/authors/delete?author_id=${id}`, requestOptions)
            .then((response) => {
                if (response.ok) {
                    setDeleted(true);
                    props.setActive([]);
                } else {
                    console.error("Error deleting author");
                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            <input type="number" name="authorId" placeholder="Author ID" />
            <Button onClick={handleClick}>Search</Button>
            {props.active.length > 0 ? (
                <>
                    <Table bordered hover>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr key={"byId-" + props.active[0].id}>
                            <td>{props.active[0].id}</td>
                            <td>
                                {props.active[0].firstName} {props.active[0].lastName}
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                    {!deleted && (
                        <Button variant="danger" onClick={handleDelete}>
                            Delete
                        </Button>
                    )}
                </>
            ) : null}
        </>
    );
}

export default AuthorById;
