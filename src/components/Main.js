import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import To_main from "./cards/To_main"


const Main = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/api/todo/components")
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

        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://i.ibb.co/wrZZSP3/1.png"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Какая то классная сборка</h3>
            <p>Но вот водянка так себе</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://i.ibb.co/z4MV5kx/2.png"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Какая то алиэкспрессная сборка</h3>
            <p>Снеговик так и светится</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://i.ibb.co/fYKKXgF/3.png"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Какая то классная сборка</h3>
            <p>Но была бы лучше если это был райзен</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

            <h1 className="text-center my-4">Сборки пк</h1>
            <Row className="ml-2">
            
                {items.map((el) => (
                    <To_main key={el.id} todo={el} />
                ))}
            </Row>
        </Fragment>
    );
};

export default Main;