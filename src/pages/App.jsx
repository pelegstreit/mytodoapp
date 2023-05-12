import styled from "styled-components";
import { FaBeer } from "react-icons/fa";
import Add from "./add"
import List from "./list";
import Filter from "./filter"
import { useEffect } from "react";
import {getTasksfromDB} from "../network/todosnetwork";
import {getInitialTasks} from "../state/tasks.slice";
import {fetch_tasks} from "../state/tasks.slice";


import { useSelector, useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.mytasks);
 

useEffect(()=>{
  async function getInitLists (){
    // const inittasks = await getTasksfromDB();
    // console.log("inittasks are:", inittasks);
    // dispatch(getInitialTasks(inittasks));
    // console.log("tasks in state are:",tasks);
    console.log("getInitLists");
    dispatch(fetch_tasks());
  }
  getInitLists ();

},[]);

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
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  font-size: 5rem;
  font-weight: 900;
  color: #333;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
  text-align: center;
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