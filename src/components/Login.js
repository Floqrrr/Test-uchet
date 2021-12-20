import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

const initialState = {
    login: '',
    password: ''

};

const Login=({history})=>{

    const [formData, setFormData] = useState(initialState);


    const OnChange = (e) => {
        console.log(e.target);
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const {login, password} = formData;
      
    const auth = () => {
        if(login == 'admin' && password == 'admin')
        {
            history.push('/main')
        }
        else if (login == '' || password == '')
        {
            alert('Заполните все поля')
        }
        else
        {
            alert('Неверный логин или пароль')
        }
    }

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'black'}
    const btnstyle={margin:'30px 0'}
    return(
        <Container>
           <Row className="justify-content-center">
                <Col className="col-md-3">
                <h1>Авторизация</h1>
                <Form className="ml-3 mr-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Введите логин</Form.Label>
                        <Form.Control placeholder="Название товара" type="text" name="login" value={login} onChange={OnChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control placeholder="Количество в шт." type="password" name="password" value={password} onChange={OnChange}/>
                    </Form.Group>
                    <Button onClick={auth}>Войти</Button>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}

        /*<Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Авторизация</h2>
                </Grid>
                <TextField label='Логин' placeholder='Введите логин' name="login" value={login} onChange={OnChange} fullWidth required/>
                <TextField label='Пароль' placeholder='Введите пароль' name="password" value={password} onChange={OnChange} type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" onClick={auth} style={btnstyle} fullWidth>войти</Button>
            </Paper>
        </Grid> */

export default Login