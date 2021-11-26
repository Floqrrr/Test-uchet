import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import To_orders from "./cards/To_orders"


const Main = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/api/todo/order")
        .then((res) => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result)
            },
            (error) => {
                console.log(error)
            }
        )
    }, []);

    return !isLoaded && items === null ? (
        <Fragment>
            <Container>
                <h1>Загрузка</h1>
            </Container>
        </Fragment>
    ) : (
        <Fragment>

       

            <h1 className="text-center my-4">Продажи</h1>
            <Row className="ml-2">
            
                {items.map((el) => (
                    <To_orders key={el.id} todo={el} />
                ))}
            </Row>
        </Fragment>
    );
};

export default Main;