import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";



//Универсальная карточка для всех комплектующих

const To_motherboard = ({todo}) => {

    console.log(todo);
    return (

        <Card style={{ width: '17rem' }} className="ml-2 mt-2">
             <Card.Title className="ml-2 mt-2 mx-auto">{todo.brend} {todo.model}</Card.Title>
            <Card.Img  className="rounded mx-auto d-block" style={{ width: '8rem' }} src = {"https://c.dns-shop.ru/thumb/st4/fit/0/0/c2097c9af48ca15c532ec811ecfacdf3/849d616ba35d03a59a6741a3844c5ebbb323d6027d61c459ce464287e96c9477.jpg"} />

            <Card.Body>
                <Card.Subtitle>
                    Характеристики:
                </Card.Subtitle>
                <Card.Text>
                    Тип памяти: {todo.memory_type} DDR,
                    Чипсет: {todo.chipset},
                    Сокет: {todo.socket}
                    
                    
                </Card.Text>
                <Card.Text>
                    <hr></hr>
                    Цена: {todo.price}
                </Card.Text>
                
            </Card.Body>
        </Card>

    )
}

export default To_motherboard;