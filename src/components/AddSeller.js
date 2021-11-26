import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { getData } from "./actions/actions";
import { SendTodoAddSeller, SendTodoDeleteSeller } from "./actions/sendTodo";

const initialState = {
    name: "",
    surname: "",
    post: "",
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
      alert("Введие имя сотрудники")
    }
    else if(/^(0|-?[1-9]\d{0,5})$/.test(formData.name))
    {
      alert("Имя не должно содержать цифр")
    }
    else{

      if(formData.surname === "")
      {
        alert("Введие фамилию сотрудника")
      }
      else if(/^(0|-?[1-9]\d{0,5})$/.test(formData.surname))
      {
        alert("Фамилия не должна содержать цифр")
      }
      else
      {
          if(formData.post === "")
        {
          alert("Введие должность сотрудника")
        }
        else if(/^(0|-?[1-9]\d{0,5})$/.test(formData.post))
        {
          alert("Название должности не должно быть буквенными или с содержание цифр")
        }
        else
        {
          SendTodoAddSeller(formData);
          window.location.reload();
        }
      }
    }

    console.log(categories_id);
  };

  const Ondel = (e)=> {
    e.preventDefault();
    SendTodoDeleteSeller(categories_id)
    window.location.reload();
  }

  const { name, surname, post, manufactured_time, expiration_date, manufacturer_id, categories_id } = formData;

  useEffect(() => {
    getData().then((result) => setData(result));
  }, [getData]);

  return data == null ? (
    <h1>loading</h1>
  ) : (
        <Fragment>
            <h1 className="text-center my-4">Редактирование сотрудников</h1>
                <Row className="justify-content-center">
                <Col className="col-md-5">
                <Form className="ml-3 mr-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Добавление нового сотрудника</Form.Label>
                        <Form.Control className="mb-3" placeholder="Имя" type="text" name="name" value={name} onChange={OnChange}/>
                        <Form.Control className="mb-3" placeholder="Фамилия" type="text" name="surname" value={surname} onChange={OnChange}/>
                        <Form.Control className="mb-3" placeholder="Должность" type="text" name="post" value={post} onChange={OnChange}/>
                    </Form.Group>
                    <Button className="mb-3" onClick={OnSubmit} variant="primary" type="submit">
                        Добавить
                    </Button>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Удаление сотрудника</Form.Label>
                    <Form.Control as="select" name="categories_id" onChange={OnChange}  value={categories_id}>
                    {data.sellers.map((item) => (
                        <option
                        as="button"
                        id={categories_id}
                        value={item.id}
                        key={item.id}
                        >
                        {item.name + " " + item.surname + " " + item.post}
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