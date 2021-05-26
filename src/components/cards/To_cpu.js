import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";



//Универсальная карточка для всех комплектующих

const To_cpu = ({todo}) => {

    console.log(todo);
    return (

        <Card style={{ width: '15rem' }} className="ml-2 mt-2">
             <Card.Title className="mt-2 mx-auto d-block">{todo.brend} {todo.model}</Card.Title>
            <Card.Img  className="rounded mx-auto d-block" style={{ width: '8rem' }} src = {"https://c.dns-shop.ru/thumb/st4/fit/320/250/120d4d6fad84b41aae2ebcd93a3746a2/784cc4980a12f477bfedf2ea75ac4cdc8fbd299f856aeb32f134a3d264882a1d.jpg"} />

            <Card.Body>
                <Card.Subtitle>
                    Характеристики:
                </Card.Subtitle>
                <Card.Text>
                    Количество ядер: {todo.num_of_core},
                    Количество потоков: {todo.num_of_threads},
                    Частота: {todo.frequency} МГц,
                    <p>
                        Сокет: {todo.socket}
                    </p>
                </Card.Text>
                <Card.Text>
                    <hr></hr>
                    Цена: {todo.price}
                </Card.Text>
                
            </Card.Body>
        </Card>

    )
}

export default To_cpu;