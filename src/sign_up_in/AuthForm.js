import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import React, { useState } from 'react';
import SignIn from "./SignIn";
import SignUp from "./SignUp";


const MainWindow = styled.div`
  width: 450px;
  margin: 0 auto;
  margin-top: 180px;
  background-color: #ffffff;
`

const SwitchSignIn = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  a{
    text-decoration: none;
    color: #787d85;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 11px;
    font-weight: 600;
    margin-left: 40px;
    :hover{
      color: black;
      transition: 1500ms;
    }
  }
`

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const AuthForm = () => {

  let query = useQuery();
  const [overflow, setOverflow] = useState(query.get('overflow'));

  return (
    <>
      <Link to='/Dashboard'>Домой</Link>
      <MainWindow>
        <SwitchSignIn>
          <a href="#" onClick={() => setOverflow('SignIn')}>Войти</a>
          <a href="#" onClick={() => setOverflow('SignUp')}>Создать учётную запись</a>
        </SwitchSignIn>
        {
          overflow === 'SignIn' ?
            <SignIn />
            :
            <SignUp />
        }
      </MainWindow>
    </>
  );
}

export default AuthForm;