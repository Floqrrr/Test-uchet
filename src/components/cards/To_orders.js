import React from "react";
import { Card, Button } from "react-bootstrap";
import {Link} from "react-router-dom"

//Универсальная карточка для всех комплектующих

const To_orders = ({todo}) => {
    console.log(todo);

    return (

        <Card style={{ width: '15rem' }} className="ml-2 mt-2">
             <Card.Title className="mt-2 mx-auto d-block">{todo.name}</Card.Title>
            <Card.Img  className="rounded mx-auto d-block" style={{ width: '8rem' }} src = {"https://cdn-icons.flaticon.com/png/512/4030/premium/4030569.png?token=exp=1637315527~hmac=bdd25881cb95c8557105401e671ce38c"} />
            <Card.Title className="mt-2 mx-auto d-block">Количество: {todo.count}</Card.Title>
            <Card.Title>Цена: {todo.price}</Card.Title>
            <Card.Title>Время: {todo.datetime}</Card.Title>

        </Card>
    )
}

export default To_orders;