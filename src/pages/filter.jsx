import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllCompleted, showAll, showActive, showClosed,deletetaskfromDB,deleteAllCompletedtasks } from "../state/tasks.slice"
import { useRef } from "react";

const Filter = () => {
  const tasks = useSelector((state) => state.tasks.mytasks);
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

  function FilterDeleteAllCompleted(){
    let completedArr= [];
    for(let task of tasks){
      if (task.open === false)
      {
        // completedArr.push(task.id);
        
        dispatch(deletetaskfromDB(task.id));
      }
      //  dispatch(deleteAllCompletedtasks(completedArr));
    }
    
  }



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
      <DeleteCompleted isOpen={tasks.length - checkforUncompletedTasks(tasks)} onClick={() => {
        FilterDeleteAllCompleted();
        dispatch(deleteAllCompleted());  
      
      }} >Clear completed</DeleteCompleted>
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
color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${({ bg }) => bg === 'showAll' ? '#4CAF50' : '#CCCCCC'};
  &:hover {
    background-color: ${({ bg }) => bg === 'showAll' ? '#3e8e41' : '#AAAAAA'};
  }
`;

const ShowActive = styled.button`
font-size: 2rem;
width: 125px;
height: 50px;
cursor: pointer;
color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
background-color: ${({ bg }) => bg === 'showActive' ? '#4CAF50' : '#CCCCCC'};
&:hover {
    background-color: ${({ bg }) => bg === 'showActive' ? '#3e8e41' : '#AAAAAA'};
  }
`;

const ShowClose = styled.button`
font-size: 2rem;
width: 125px;
height: 50px;
cursor: pointer;
color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
background-color: ${({ bg }) => bg === 'showClosed' ? '#4CAF50' : '#CCCCCC'};
&:hover {
    background-color: ${({ bg }) => bg === 'showClosed' ? '#3e8e41' : '#AAAAAA'};
  }
`;

const DeleteCompleted = styled.button`
font-size: 2rem;
width: 125px;
height: 50px;
cursor: pointer;
color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
background-color: #fb5050;

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