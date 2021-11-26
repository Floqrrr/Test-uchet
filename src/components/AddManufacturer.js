import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { getData } from "./actions/actions";
import { SendTodoAddManufacturer, SendTodoDeleteSeller } from "./actions/sendTodo";

const initialState = {
    name: "",
    country: "",
    categories_id: 1
};

const AddManufacturer = ({ history }) => {

    const [formData, setFormData] = useState(initialState);
    const [data, setData] = useState();

  const OnChange = (e) => {
    console.log(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const OnSubmit = (e) => {
    if(formData.name === "")
    {
      alert("Введие название категории")
    }
    else if(/^(0|-?[1-9]\d{0,5})$/.test(formData.name))
    {
      alert("Название категории должно быть буквенными или с содержание цифр")
    }
    else{

        if(formData.country === "")
      {
        alert("Введие название страны")
      }
      else if(/^(0|-?[1-9]\d{0,5})$/.test(formData.country))
      {
        alert("Название категории должно быть буквенными или с содержание цифр")
      }
      else
      {
        console.log(formData);
      }

    }
    e.preventDefault();
    SendTodoAddManufacturer(formData);
    window.location.reload();
  };

  const Ondel = (e)=> {
    e.preventDefault();
    SendTodoDeleteSeller(categories_id)
    window.location.reload();
  }

  const { name, surname, country, manufactured_time, expiration_date, manufacturer_id, categories_id } = formData;

  useEffect(() => {
    getData().then((result) => setData(result));
  }, [getData]);

  return data == null ? (
    <h1>loading</h1>
  ) : (
        <Fragment>
            <h1 className="text-center my-4">Редактирование поставщиков</h1>
                <Row className="justify-content-center">
                <Col className="col-md-5">
                <Form className="ml-3 mr-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Добавление нового поставщика</Form.Label>
                        <Form.Control className="mb-3" placeholder="Название" type="text" name="name" value={name} onChange={OnChange}/>
                        <Form.Control className="mb-3" placeholder="Страна" type="text" name="country" value={country} onChange={OnChange}/>
                    </Form.Group>
                    <Button className="mb-3" onClick={OnSubmit} variant="primary" type="submit">
                        Добавить
                    </Button>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Удаление поставщика</Form.Label>
                    <Form.Control as="select" name="categories_id" onChange={OnChange}  value={categories_id}>
                    {data.manufacturers.map((item) => (
                        <option
                        as="button"
                        id={categories_id}
                        value={item.id}
                        key={item.id}
                        >
                        {item.name + " " + item.country}
                        </option>
                    ))}
                    </Form.Control>
                    </Form.Group>
                    <Button className="mb-3" onClick={Ondel} variant="outline-danger">
                        Удалить
                    </Button>
                </Form>
                </Col>
                </Row>
        </Fragment>
    );
};

export default AddManufacturer;