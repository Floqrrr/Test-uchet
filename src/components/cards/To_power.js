import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";



//Универсальная карточка для всех комплектующих

const To_power = ({todo}) => {

    console.log(todo);
    return (

        <Card style={{ width: '15rem' }} className="ml-2 mt-2">
             <Card.Title className="mt-2 mx-auto d-block">{todo.brend} {todo.model}</Card.Title>
            <Card.Img  className="rounded mx-auto d-block" style={{ width: '8rem' }} src = {"https://c.dns-shop.ru/thumb/st1/fit_width/120/120/de45ae9bb1563e50d2318c545d6b0cde/14ae7df68851ca73bea9f7c21de31ad358f5535be521d7fd5088b3ac9f05dfc7.jpg"} />

            <Card.Body>
                <Card.Subtitle>
                    Характеристики:
                </Card.Subtitle>
                <Card.Text>
                   Форм-фактор: {todo.form_factor},
                   Мощность: {todo.power} Вват
                </Card.Text>
                <Card.Text>
                    <hr></hr>
                    Цена: {todo.price}
                </Card.Text>
                
            </Card.Body>
        </Card>

    )
}

export default To_power;