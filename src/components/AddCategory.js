import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { getData } from "./actions/actions";
import { SendTodoAddCategories, SendTodoDeleteCategories } from "./actions/sendTodo";

const initialState = {
    name: "",
    categories_id: 1
};

const AddCategory = ({ history }) => {

    const [formData, setFormData] = useState(initialState);
    const [data, setData] = useState();

  const OnChange = (e) => {
    console.log(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    if(formData.name === "")
    {
      alert("Введие название категории")
    }
    else if(/^(0|-?[1-9]\d{0,5})$/.test(formData.name))
    {
      alert("Название категории должно быть буквенными или с содержание цифр")
    }
    else
    {
      SendTodoAddCategories(formData);
      window.location.reload();
    } 
  };

  const Ondel = (e)=> {

    e.preventDefault();
  
    SendTodoDeleteCategories(categories_id)
    //window.location.reload();
    console.log(categories_id)
  }

  const { name, count, price, manufactured_time, expiration_date, manufacturer_id, categories_id } = formData;

  useEffect(() => {
    getData().then((result) => setData(result));
  }, [getData]);

  return data == null ? (
    <h1>loading</h1>
  ) : (
        <Fragment>
            <h1 className="text-center my-4">Изменение категории</h1>
                <Row className="justify-content-center">
                <Col className="col-md-5">
                <Form className="ml-3 mr-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Введите название категории</Form.Label>
                        <Form.Control placeholder="Название категории" type="text" name="name" value={name} onChange={OnChange}/>
                    </Form.Group>
                    <Button className="mb-3" onClick={OnSubmit} variant="primary" type="submit">
                        Добавить
                    </Button>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Удаление категории</Form.Label>
                    <Form.Control as="select" name="categories_id" onChange={OnChange}  value={categories_id}>
                    {data.categoriess.map((item) => (
                        <option
                        as="button"
                        id={categories_id}
                        value={item.id}
                        key={item.id}
                        >
                        {item.name}
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

export default AddCategory;