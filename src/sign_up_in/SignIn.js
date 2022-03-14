import styled from "styled-components";
import { Navigate } from 'react-router-dom';
import '../App.css';
import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import Api from "../Api";

const MainContainer = styled.div`
  width: 84%;
  margin: 0 auto;
  #error{
    color: crimson;
  }
  #SimpleLine{
    margin: unset;
    width: 100%;
    border: none;
    border-top: 1px solid grey;
    opacity: 1;
  }
  #SignInLine{
    margin: unset;
    width: 14%;
    border: none;
    border-top: 2px solid #f56c2d;
    opacity: 1;
  }
  #SignUpLine{
    margin: unset;
    margin-left: 85px;
    width: 50%;
    border: none;
    border-top: 2px solid #f56c2d;
    opacity: 1;
  }
  #headline{
    margin: 30px 0 20px 0px;
    font-size: 24px;
    font-weight: normal;
    color: black;
  }
  .MuiInputBase-root{
    margin-bottom: 20px;
  }
  #outlined-basic{
    width: 350px;
  }
  .MuiButtonBase-root{
    background-color: #f56c2d;
    width: 100%;
    font-size: 14px;
    text-transform: none;
    margin: 30px 0 50px 0px;
    :hover{
      transition: 800ms;
      background-color: #c85e36;
    }
  }
`

const SignIn = () => {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const Login = () => {
    setErrorMessage("");
    Api.Auth.signIn(username, password).then((res) => {
      if (res.status === 200 || res.status === 201) {
        setRedirect(true)
      }
    }).catch((error) => {
      setErrorMessage(error?.response?.data?.message || "")
    })
  }

  if (redirect) {
    return <Navigate to='/Dashboard' push />
  }

  return (
    <>
      <MainContainer>
        <hr id="SignInLine" />
        <hr id="SimpleLine" />
        <p id="headline">Войти с помощью вашей учётной записи</p>
        <TextField
          id="outlined-basic"
          color="warning"
          size="small"
          label="Имя пользователя"
          variant="outlined"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField id="outlined-basic"
          color="warning"
          size="small"
          label="Пароль"
          variant="outlined"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div>
          <p id="error">{errorMessage}</p>
        </div>
        <Button onClick={Login} variant="contained">Войти</Button>
      </MainContainer>
    </>
  );
}


export default SignIn;