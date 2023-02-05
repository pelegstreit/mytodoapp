import styled from "styled-components";
import { FaBeer } from "react-icons/fa";
import Add from "./add"
import List from "./list";
import Filter from "./filter"

const App = () => {
  return (
    <>
      <Headline><FaBeer />TODO app <FaBeer /></Headline>
      <Maindiv>
        <Add/>
        <List/>
        <Filter/>
        </Maindiv>
    </>
  )
}

export default App

const Headline = styled.div`
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
font-size: 5rem
`;

const Maindiv = styled.div`
position: absolute;
  /* min-height: 200px; */
  width: 600px;
  /* border: 1px solid blue; */
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
 justify-content: center; 
  align-items: center;
  margin-top: 10rem;
  background:white;
  margin-left:calc(50% - 300px);
  /* margin-right:50%; */
`;