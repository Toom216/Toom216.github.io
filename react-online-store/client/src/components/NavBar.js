import React from "react";
import { useContext } from "react";
import { Context } from "..";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
                    КупиДевайс
                </NavLink>
                {user.isAuth ? (
                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button onClick={() => history.push(ADMIN_ROUTE)} variant={"outline-light"}>
                            Админ панель
                        </Button>
                        <Button onClick={() => history.push(LOGIN_ROUTE)} variant={"outline-light"}>
                            Выйти
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>
                            Авторизация
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;
