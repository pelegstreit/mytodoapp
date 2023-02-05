import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllCompleted, showAll, showActive, showClosed } from "../state/tasks.slice"
import { useRef } from "react";

const Filter = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  // let HowMuchUncompletedTasks = useRef(0);
  let filterStat= useRef("showAll");


  function checkforUncompletedTasks(array) {
    let counter  = 0;
    for (let obj of array) {
      if (obj.open === true) {
        counter = counter + 1
      }
    }
    return counter;
  };



  function allclick() {
    dispatch(showAll());
    filterStat.current= "showAll";
  }
  function activeclick() {
    dispatch(showActive());
    filterStat.current= "showActive"
  }
  function closeclick() {
    filterStat.current= "showClosed"
    dispatch(showClosed());

  }



  return (
    <Buttom>
      <Div myCounter={checkforUncompletedTasks(tasks)}> {checkforUncompletedTasks(tasks)} tasks left</Div>
      <ShowAll bg={filterStat.current}  onClick={() => allclick()} >All</ShowAll>
      <ShowActive bg={filterStat.current}  onClick={() => activeclick()} >Active</ShowActive>
      <ShowClose bg={filterStat.current}  onClick={() => closeclick()} >Completed</ShowClose>
      <DeleteCompleted isOpen={tasks.length - checkforUncompletedTasks(tasks)} onClick={() => dispatch(deleteAllCompleted())} >Clear completed</DeleteCompleted>
    </Buttom>
  )
}

export default Filter
const Buttom = styled.div`
height: 50px;
width: 600px;
/* border: 1px solid red; */
font-family: "Roboto", sans-serif;
display: flex;
flex-direction: row;
margin-top: 0rem;
padding-top: 0px;
`
const ShowAll = styled.button`
font-size: 2rem;
width: 125px;
height: 50px;
cursor: pointer;
background-color: turquoise;
border-radius: 15%;
background-color: ${({ bg }) => bg === 'showAll' ? `turquoise` : `grey`};
`;

const ShowActive = styled.button`
font-size: 2rem;
width: 125px;
height: 50px;
cursor: pointer;
background-color: grey;
border-radius: 15%;
background-color: ${({ bg }) => bg === 'showActive' ? `turquoise` : `grey`};
`;

const ShowClose = styled.button`
font-size: 2rem;
width: 125px;
height: 50px;
cursor: pointer;
background-color: grey;
border-radius: 15%;
background-color: ${({ bg }) => bg === 'showClosed' ? `turquoise` : `grey`};
`;

const DeleteCompleted = styled.button`
font-size: 2rem;
width: 125px;
height: 50px;
cursor: pointer;
background-color: #fb5050;
border-radius: 15%;
display: ${({ isOpen }) => isOpen ? `block` : `none`};
`;

const Div = styled.div`
  font-size: 20px;
  width: 125px;
  height: 50px;
  text-align: center;
  padding: 14px 0;
  /* color: green; */
  color: ${({ myCounter }) => myCounter ? `red` : `green`};
`;