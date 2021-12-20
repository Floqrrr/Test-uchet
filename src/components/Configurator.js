import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Container,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import { getData } from "./actions/actions";
import { sendTodo } from "./actions/sendTodo";


const initialState = {
  name: "",
  id_cpu: "",
  id_gpu: "",
  id_motherboard: "",
  id_ram: "",
  id_power_sup: "",
  id_hdd: ""
};

const Configurator = ({ history }) => {
  const [formData, setFormData] = useState(initialState);
  const [data, setData] = useState();

  const OnChange = (e) => {
    console.log(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    sendTodo(formData);
    history.push("/main")
    console.log(formData);
  };

  const { name, id_cpu, id_gpu, id_motherboard, id_hdd, id_power_sup, id_ram } = formData;

  useEffect(() => {
    getData().then((result) => setData(result));
  }, [getData]);

  return data == null ? (
    <h1>loading</h1>
  ) : (
    <div className="form-add-todo">
      <Container>
        <h1 className="text-center my-4">Конфигуратор</h1>
        <Row>
          <Col className="col md-6">
            <Card style={{ width: "30rem" }} className="ml-2 mt-2">
              <Card.Img
                className="rounded mx-auto d-block"
                style={{ width: "30rem" }}
                src={
                  "https://sun9-48.userapi.com/c849416/v849416404/13d297/51Pc5r7PiXU.jpg"
                }
              />
            </Card>
          </Col>
          <Col className="col-md-6">
            <Form onSubmit={OnSubmit}>
              <Form.Group>
              <Form.Label>Введите название сборки</Form.Label>
              <Form.Control className="col-mb-2"
                    type="text"
                    name="name"
                    value={name}
                    onChange={OnChange}
                  />
                <Form.Label>Выберите процессор</Form.Label>
                <Form.Control as="select" name="id_cpu" onChange={OnChange}  value={id_cpu}>
                  {data.cpus.map((item) => (
                    <option
                      as="button"
                      id={id_cpu}
                      value={item.id}
                      key={item.id}
                    >
                    {item.model}
                    </option>
                  ))}
                </Form.Control>
                <Form.Label>Выберите видеокарту</Form.Label>
                <Form.Control as="select" name="id_gpu" onChange={OnChange}  value={id_gpu}>
                  {data.gpus.map((item) => (
                    <option
                      as="button"
                      id={id_gpu}
                      value={item.id}
                      key={item.id}
                    >
                      {item.model}
                    </option>
                  ))}
                </Form.Control>
                <Form.Label>Выберите материнскую плату</Form.Label>
                <Form.Control as="select" name="id_motherboard" onChange={OnChange}  value={id_motherboard}>
                  {data.motherboards.map((item) => (
                    <option
                      as="button"
                      id={id_motherboard}
                      value={item.id}
                      key={item.id}
                    >
                      {item.model}
                    </option>
                  ))}
                </Form.Control>
                <Form.Label>Выберите блок питания</Form.Label>
                <Form.Control as="select" name="id_power_sup" onChange={OnChange}  value={id_power_sup}>
                  {data.powers.map((item) => (
                    <option
                      as="button"
                      id={id_power_sup}
                      value={item.id}
                      key={item.id}
                    >
                      {item.model}
                    </option>
                  ))}
                </Form.Control>
                <Form.Label>Выберите оперативную память</Form.Label>
                <Form.Control as="select" name="id_ram" onChange={OnChange}  value={id_ram}>
                  {data.rams.map((item) => (
                    <option
                      as="button"
                      id={id_ram}
                      value={item.id}
                      key={item.id}
                    >
                      {item.model}
                    </option>
                  ))}
                </Form.Control>
                <Form.Label>Выберите жесткий диск</Form.Label>
                <Form.Control as="select" name="id_hdd" onChange={OnChange}  value={id_hdd}>
                  {data.hdds.map((item) => (
                    <option
                      as="button"
                      id={id_hdd}
                      value={item.id}
                      key={item.id}
                    >
                      {item.model}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Button onClick={OnSubmit} variant="outline-primary">
                Создать
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Configurator;