import styled from "styled-components";
import '../App.css';
import Header from "../header/Header";

const  MainWindow = styled.div`
  background-color: white;
  display: flex;
  width: 600px;
  margin: 0 auto;
  margin-top: 200px;
  p{
    margin: unset;
  }
`

const Rules = () => {
  return (
  <>
    <Header/>
    <MainWindow>
      <p>Some text to fill the space. Some text to fill the space.
      Some text to fill the space. Some text to fill the space.
      Some text to fill the space. Some text to fill the space.
      Some text to fill the space. Some text to fill the space.
      Some text to fill the space. Some text to fill the space.
      Some text to fill the space. Some text to fill the space.
      Some text to fill the space. Some text to fill the space.
      Some text to fill the space. Some text to fill the space.
      Some text to fill the space. Some text to fill the space.
      Some text to fill the space. Some text to fill the space. </p>
    </MainWindow>
  </>
  )
}


export default Rules;