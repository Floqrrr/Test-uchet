import React from "react";
import { Card } from "react-bootstrap";



//Универсальная карточка для всех комплектующих

const To_gpu = ({todo}) => {

    console.log(todo);
    return (

        <Card style={{ width: '17rem' }} className="ml-2 mt-2">
             <Card.Title className="ml-2 mt-2 mx-auto">{todo.brend} {todo.model}</Card.Title>
            <Card.Img  className="rounded mx-auto d-block" style={{ width: '8rem' }} src = {"https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/d72dbf97a1ca7442018c8ca601d57d90/0b191381ededb060aa07e8bc830a25ed74296bc001a3d766de59a9c2d8864aa6.jpg"} />

            <Card.Body>
                <Card.Subtitle>
                    Характеристики:
                </Card.Subtitle>
                <Card.Text>
                    
                    Тип видеопамяти: {todo.memory_type} GDDR,
                    Объем видеопамяти: {todo.memory_size} Гб,
                    <p>Частота: {todo.frequency} МГц</p>
                    
                    
                </Card.Text>
                <Card.Text>
                    <hr></hr>
                    Цена: {todo.price}
                </Card.Text>
                
            </Card.Body>
        </Card>

    )
}

export default To_gpu;