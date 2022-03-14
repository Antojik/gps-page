import '../App.css';
import Header from "../header/Header";
import SimpleMap from '../MapTest';
import { useState } from 'react';
import styled from "styled-components";

const ErrorText = styled.p`
  color: white;
  margin: 0 auto;
  width: 300px;
  margin-top: 300px;
`

const Dashboard = () => {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('token') ? true : false)

  return (
    <>
      <Header />
      {
        !isAuth ?
          <ErrorText>Авторизуйтесь для работы с картой</ErrorText> :
          <SimpleMap />
      }
    </>
  );
}

export default Dashboard;