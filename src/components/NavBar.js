import {React} from "react";
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from "react-bootstrap";

const NavBar = () => {
    return(
    <>    
        <Navbar  bg="dark" variant="dark">
            <Navbar.Brand href="/">Conf_pc</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/configurator">Собрать пк</Nav.Link>
                <NavDropdown title="Комплектующие" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/cpu">Процессоры</NavDropdown.Item>
                    <NavDropdown.Item href="/gpu">Видеокарты</NavDropdown.Item>
                    <NavDropdown.Item href="/motherboard">Материнские платы</NavDropdown.Item>
                    <NavDropdown.Item href="/hdd">Жесткие диски</NavDropdown.Item>
                    <NavDropdown.Item href="/ram">Оперативная память</NavDropdown.Item>
                    <NavDropdown.Item href="/power">Блоки питания</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar>
    </>
    )    
}

export default NavBar;