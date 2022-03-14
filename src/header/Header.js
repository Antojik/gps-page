import styled from "styled-components";
import '../App.css';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import React, { useState } from "react";
import SignIn from '../sign_up_in/SignIn.js'


const HeaderContainer = styled.div`
  background-color: #A0CED9;
  height: 60px;
  .row{
    margin: unset;
    height: 100%;
  }
  .col-md-9{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .col-md-3{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  a{
    padding: 0 15px;
    background-color: #1F2041;
    color: white;
    font-size: 20px;
    text-decoration: none;
  }
  a:hover{
    padding: 2px 25px;
    background-color: blueviolet;
    transition: 1000ms;
    color: white;
    font-size: 20px;
    text-decoration: none;
  }
`

const Header = () => {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('token') ? true : false)

  const LogOut = () => {
    localStorage.removeItem('token')
    setIsAuth(false)
  }
  
  console.log(isAuth);
  return (
    <HeaderContainer>
      <Row>
        <Col md={9}>
          <Link to='/Rules'>Правила использования</Link>
        </Col>
        {
          !isAuth ? (
            <Col md={3}>
              <Link to='/SignIn?overflow=SignIn'>Войти</Link>
              <Link to='/SignIn?overflow=SignUp'>Регистрация</Link>
            </Col>) :
            (
              <Col md={3}>
                <Link onClick={LogOut} to='/SignIn'>Выйти </Link>
              </Col>
            )
        }
      </Row>
    </HeaderContainer>
  );
}

export default Header;