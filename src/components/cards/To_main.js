import React from "react";
import { Card, Button } from "react-bootstrap";
import {Link} from "react-router-dom"

//Универсальная карточка для всех комплектующих

const To_main = ({todo}) => {
    console.log(todo);

    return (

        <Card style={{ width: '15rem' }} className="ml-2 mt-2">
             <Card.Title className="mt-2 mx-auto d-block">{todo.name} {todo.model}</Card.Title>
            <Card.Img  className="rounded mx-auto d-block" style={{ width: '8rem' }} src = {"https://sun9-48.userapi.com/c849416/v849416404/13d297/51Pc5r7PiXU.jpg"} />

            <Card.Body>
                <Link to={`/edit/${todo.id}`}>
                    <Button className="mt-2 mx-auto d-block">Редактировать</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default To_main;