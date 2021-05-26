import React from "react";
import { Card } from "react-bootstrap";



//Универсальная карточка для всех комплектующих

const To_ram = ({todo}) => {

    console.log(todo);
    return (

        <Card style={{ width: '15rem' }} className="ml-2 mt-2">
             <Card.Title className="mt-2 mx-auto d-block">{todo.brend} {todo.model}</Card.Title>
            <Card.Img  className="rounded mx-auto d-block" style={{ width: '8rem' }} src = {"https://c.dns-shop.ru/thumb/st1/fit/320/250/03a48d49e356a3a18378bfd8a1068618/a6d3b7d9752ea17d1c299c3d0832943d8ac957ab1bad7baa1cee8ffd4eea9a1d.jpg"} />

            <Card.Body>
                <Card.Subtitle>
                    Характеристики:
                </Card.Subtitle>
                <Card.Text>
                   Объем памяти: {todo.memory_size} Гб,
                   Тип памяти: {todo.memory_type} DDR,
                   Частота: {todo.frequency} Мгц
                </Card.Text>
                <Card.Text>
                    <hr></hr>
                    Цена: {todo.price}
                </Card.Text>
                
            </Card.Body>
        </Card>

    )
}

export default To_ram;