import React from "react";
import { Card, Button } from "react-bootstrap";
import {Link} from "react-router-dom"

//Универсальная карточка для всех комплектующих

const To_main = ({todo}) => {
    console.log(todo);

    return (

        <Card style={{ width: '15rem' }} className="ml-2 mt-2">
             <Card.Title className="mt-2 mx-auto d-block">{todo.name}</Card.Title>
            <Card.Img  className="rounded mx-auto d-block" style={{ width: '8rem' }} src = {"https://cdn-icons.flaticon.com/png/512/4030/premium/4030569.png?token=exp=1637315527~hmac=bdd25881cb95c8557105401e671ce38c"} />
            <Card.Title className="mt-2 mx-auto d-block">Количество: {todo.count}</Card.Title>
            <Card.Title className="mt-2 mx-auto d-block">Цена: {todo.price}</Card.Title>
            <Card.Body>
            <Link to={`/order/${todo.name}`}>
                    <Button className="mt-2 mx-auto d-block" variant="success">Продажа</Button>
                </Link>
                <Link to={`/edit/${todo.name}`}>
                    <Button className="mt-2 mx-auto d-block">Редактировать</Button>
                </Link>
                
            </Card.Body>
        </Card>
    )
}

export default To_main;