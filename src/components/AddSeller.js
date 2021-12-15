import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { getData } from "./actions/actions";
import { SendTodoAddSeller, SendTodoDeleteSeller } from "./actions/sendTodo";

const initialState = {
    name: "",
    surname: "",
    departament_id : 2    
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
         
          console.log(formData)
          SendTodoAddSeller(formData);
          //window.location.reload();
      }
    }

  };

  const Ondel = (e)=> {
    e.preventDefault();
    SendTodoDeleteSeller(categories_id)
    window.location.reload();
  }

  const { name, surname, departament_id, post_id, year_of_birth, admission, experience, sex, address, city,  number, categories_id } = formData;

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
                        <Form.Text>Выберите отдел</Form.Text>
                        <Form.Control className="mb-3" as="select" name="departament_id" onChange={OnChange}  value={departament_id}>
                            {data.departaments.map((item) => (
                                <option
                                as="button"
                                id={departament_id}
                                value={item.id}
                                key={item.id}
                                >
                                {item.title}
                                </option>
                            ))}
                        </Form.Control>
                        <Form.Text>Выберите должность</Form.Text>
                        <Form.Control className="mb-3" as="select" name="post_id" onChange={OnChange}  value={post_id}>
                            {data.posts.map((item) => (
                                <option
                                as="button"
                                id={post_id}
                                value={item.id}
                                key={item.id}
                                >
                                {item.title}
                                </option>
                            ))}
                        </Form.Control>
                        <Form.Control className="mb-3" placeholder="Дата рождения" type="text" name="year_of_birth" value={year_of_birth} onChange={OnChange}/>
                        <Form.Control className="mb-3" placeholder="Дата приёма" type="text" name="admission" value={admission} onChange={OnChange}/>
                        <Form.Control className="mb-3" placeholder="Стаж" type="text" name="experience" value={experience} onChange={OnChange}/>
                        <Form.Control className="mb-3" placeholder="Пол" type="text" name="sex" value={sex} onChange={OnChange}/>
                        <Form.Control className="mb-3" placeholder="Адрес" type="text" name="address" value={address} onChange={OnChange}/>
                        <Form.Control className="mb-3" placeholder="Город" type="text" name="city" value={city} onChange={OnChange}/>
                        <Form.Control className="mb-3" placeholder="Номер телефона" type="text" name="number" value={number} onChange={OnChange}/>
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
                        {item.name + " " + item.surname}
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