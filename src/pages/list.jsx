import styled from "styled-components";
import {useSelector,useDispatch} from "react-redux";
import {changestat,deletetask, updateTaskStatus, deletetaskfromDB,deleteAllCompletedtasks} from "../state/tasks.slice";
import { useEffect } from "react";
import {getTasksfromDB} from "../network/todosnetwork";
import {getInitialTasks} from "../state/tasks.slice";
import {fetch_tasks} from "../state/tasks.slice";

const List = () => {
    const tasks = useSelector((state) => state.tasks.mytasks);
    console.log("tasks in list:", tasks);
    const dispatch = useDispatch();
    const filtered = tasks.filter((obj) => obj.show=== true);
    let linesHeight= filtered.length * 40;

    useEffect(()=>{

      return () => {
      };

    },[]);

  return (
    <Middle>
        <ul>
            {
               filtered?.map((obj)=>
               <MyList key={obj.id}>
                  <CompleteButton onClick={()=>
                    {dispatch(updateTaskStatus(obj.id, obj.open));
                      dispatch(changestat(obj.task));
                    }} isOpen={obj.open}>
                      {obj.open ? 'Mark as Done' :'Reopen Mission' } </CompleteButton>
                  <Div mycolor={obj.open}> {obj.task}</Div>
                  <DeleteButton className="delete_button" onClick={()=>
                    {
                      dispatch(deletetaskfromDB(obj.id));
                      dispatch(deletetask(obj.task));
                    }}>X</DeleteButton>
              </MyList>      
)
            }
        </ul>

    </Middle>
   
  )
}

export default List;

const Middle = styled.div`
/* height: 400px; */
width: 600px;
/* border: 1px solid grey; */
font-family: "Roboto", sans-serif;
display: flex;
flex-direction: row;
margin-top: 0rem;
padding-top: 0px;
`;
const MyList = styled.li`
font-size: 3rem;
/* border: 1px solid pink; */
width: 600px;
display: flexbox;
flex-direction: row;
&:hover .delete_button{
  display: unset;
  }
`
const Div = styled.div`
font-size: 3rem;
border: 1px solid grey;
width: 380px;
height: 40px;
color: ${({ mycolor }) => mycolor? `black` : `red`};
`;
const DeleteButton =  styled.button`
font-size: 2rem;
width: 50px;
height: 40px;
cursor: pointer;
display:none;
padding: 10px 20px;
font-weight: bold;
border-radius: 5px;
border: none;
color: #ffffff;
background-color: #f30000;
&:active {
    transform: translateY(2px);
  }
  &:hover {
    background-color:#bf0101;
  }
`;
const CompleteButton =  styled.button`
padding: 10px 20px;
width: 170px;
margin-bottom: 1rem;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  cursor: pointer;

  /* Default state */
  background-color: #2196f3;
  background-color:  ${({ isOpen }) => isOpen ? ' #2196f3' : '#ce220f'} ;

  /* Hover effect */
  &:hover {
    background-color:${({ isOpen }) => isOpen ? ' #1976d2' : '#af1302'} ; ;
  }

  /* Active effect */
  &:active {
    transform: translateY(2px);
  }
`;




    