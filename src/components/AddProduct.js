import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { getData } from "./actions/actions";
import { SendTodoAddproduct } from "./actions/sendTodo";

const initialState = {
    name: "",
    count: "",
    price: "",
    manufactured_time: "",
    expiration_date: "",
    manufacturer_id: 1,
    categories_id: 1


};

const AddProduct = ({ history }) => {

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
      alert("Введите название товара")
    }
    else
    {
        if(formData.count <= 0 || formData.count.match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i))
        {
            alert("Введите правильное количество")
        }
        else
        {
            if(formData.price <= 0 || formData.price.match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i))
            {
                alert("Введите правильную цену")
            }
            else
            {
                if(formData.manufactured_time <= 0 || formData.manufactured_time.match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i))
                {
                    alert("Введите правильную дату")
                }
                else
                {
                    if(formData.expiration_date <= 0 || formData.expiration_date.match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i))
                    {
                        alert("Введите правильную дату")
                    }
                    else
                    {
                        SendTodoAddproduct(formData);
                        history.push('/')
                    }
                }
            }
        }
    }
    //console.log(formData);
  };

  const { name, count, price, manufactured_time, expiration_date, manufacturer_id, categories_id } = formData;

  useEffect(() => {
    getData().then((result) => setData(result));
  }, [getData]);

  return data == null ? (
    <h1>loading</h1>
  ) : (
        <Fragment>
            <h1 className="text-center my-4">Добавление товара</h1>
                <Row className="justify-content-center">
                <Col className="col-md-5">
                <Form className="ml-3 mr-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Введите название товара</Form.Label>
                        <Form.Control placeholder="Название товара" type="text" name="name" value={name} onChange={OnChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Укажите количество</Form.Label>
                        <Form.Control placeholder="Количество в шт." type="text" name="count" value={count} onChange={OnChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Укажите цену</Form.Label>
                        <Form.Control placeholder="За одну шт. в руб." type="text" name="price" value={price} onChange={OnChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Укажите дату изготовления</Form.Label>
                        <Form.Control placeholder="Год.Месяц.Дата" type="text" name="manufactured_time" value={manufactured_time} onChange={OnChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Укажите срок годности</Form.Label>
                        <Form.Control placeholder="Год.Месяц.Дата"  type="text" name="expiration_date" value={expiration_date} onChange={OnChange}/>
                    </Form.Group>
                    <Form.Label>Выберите поставщика</Form.Label>
                    <Form.Group className="mb-3">
                    <Form.Control as="select" name="manufacturer_id" onChange={OnChange}  value={manufacturer_id}>
                    {data.manufacturers.map((item) => (
                        <option
                        as="button"
                        id={manufacturer_id}
                        value={item.id}
                        key={item.id}
                        >
                        {"Компания: " +item.name + " " + item.country}
                        </option>
                    ))}
                    </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Выберите категорию</Form.Label>
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
                    <Button onClick={OnSubmit} variant="primary" type="submit">
                        Добавить
                    </Button>
                </Form>
                </Col>
                </Row>
        </Fragment>
    );
};

export default AddProduct;