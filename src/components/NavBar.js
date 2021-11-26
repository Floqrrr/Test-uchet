import {React, useEffect, useState} from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom"
import { getData } from "./actions/actions";

const NavBar = () => {
    const history = useHistory();

    const handleChange = (e) => {
        setSearch({value: e.target.value});
      }

    const [Search, setSearch] = useState("");
    const [Value, setValue] = useState();
    const [dat, setdat] = useState(false);
    const [data, setData] = useState();
    let k = 0;

    const ssearch = () => {
        
        data.products.map((item) => 
        {
            if(item.name == Search.value)
            {
                history.push(`/order/${Search.value}`);
                k = 1;
            }

        })

        if(k == 0) alert("Товар не найден")
        console.log(data.products.map((item) => item.name == Search.value))
    }

    useEffect(() => {
        getData().then((result) => setData(result));
      }, [getData]);


    return(
    <>    
        <Navbar  bg="success" variant="dark">
            <Navbar.Brand href="/">Главная</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/addproduct">Добавить товар</Nav.Link>
            <Nav.Link href="/addcategory">Изменить категории</Nav.Link>
            <Nav.Link href="/addseller">Сотрудники</Nav.Link>
            <Nav.Link href="/addmanufacturer">Поставщики</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <FormControl

                className="mr-2" type="text" name="count" placeholder="Поиск товара"  onChange={handleChange}
                />
                <Button className="d-flex" onClick={ssearch}>Поиск</Button>
            </Form>            
        </Navbar>
    </>
    )    
}

export default NavBar;