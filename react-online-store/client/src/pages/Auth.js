import React from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const Auth = observer(() => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control placeholder="Введите ваш email..." className="mt-3" />
                    <Form.Control placeholder="Введите пароль..." className="mt-3" />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3 ">
                        {isLogin ? (
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйтесь!</NavLink>
                            </div>
                        ) : (
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        )}
                        <Button variant="outline-success">{isLogin ? "Войти" : "Регистрация"}</Button>
                    </Row>
                </Form>
            </Card>
        </div>
    );
});

export default Auth;
