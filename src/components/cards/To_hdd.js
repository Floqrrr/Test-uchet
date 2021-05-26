import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";



//Универсальная карточка для всех комплектующих

const To_hdd = ({todo}) => {

    console.log(todo);
    return (

        <Card style={{ width: '15rem' }} className="ml-2 mt-2">
             <Card.Title className="mt-2 mx-auto d-block">{todo.brend} {todo.model}</Card.Title>
            <Card.Img  className="rounded mx-auto d-block" style={{ width: '8rem' }} src = {"https://c.dns-shop.ru/thumb/st1/fit/wm/1357/1940/73dd3a99652bf3b8cee6df4449a1c73f/98129e29b2ce63ea2b7eb36329dc2b62b8102081888ed47c14ddbc053565c71b.jpg"} />

            <Card.Body>
                <Card.Subtitle>
                    Характеристики:
                </Card.Subtitle>
                <Card.Text>
                    Объем памяти: {todo.memory_size} Гб
                  
                </Card.Text>
                <Card.Text>
                    <hr></hr>
                    Цена: {todo.price}
                </Card.Text>
                
            </Card.Body>
        </Card>

    )
}

export default To_hdd;