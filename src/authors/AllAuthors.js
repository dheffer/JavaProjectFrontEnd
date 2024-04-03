import {Button, Table} from "react-bootstrap";

function AllAuthors(props) {
    const handleClick = async () => {

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("http://localhost:8080/api/v1/authors", requestOptions)
            .then((response) => response.json())
            .then((result) => props.setActive(result))
            .catch((error) => console.error(error));
    }

    return (
        <>
            <Button onClick={handleClick}>All Authors</Button>
            {
                props.active.length > 0 ?
                    <div style={{maxHeight:"400px",overflowY:"auto"}}>
                    <Table bordered hover>
                        <thead className="sticky-top">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            props.active.map((author) => {
                                return (
                                    <tr key={author.id}>
                                        <td>{author.id}</td>
                                        <td>{author.firstName} {author.lastName}</td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </Table>
                    </div>: null
            }
        </>
    )
}

export default AllAuthors;