import styled from "styled-components";
import {useSelector,useDispatch} from "react-redux";
import {changestat,deletetask} from "../state/tasks.slice"



const List = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const filtered = tasks.filter((obj) => obj.show=== true);
    let linesHeight= filtered.length * 40;
  return (
    <Middle>
        <ul>
            {
                 filtered?.map((obj)=>
                 <MyList key={obj.task}>
                    <CompleteButton onClick={()=>dispatch(changestat(obj.task))}>V </CompleteButton>
                    <Div mycolor={obj.open}> {obj.task}</Div>
                    <DeleteButton className="delete_button" onClick={()=>dispatch(deletetask(obj.task))}>X</DeleteButton>
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
border: 1px solid grey;
font-family: "Roboto", sans-serif;
display: flex;
flex-direction: row;
margin-top: 0rem;
padding-top: 0px;
`
const DeleteButton =  styled.button`
font-size: 2rem;
width: 50px;
height: 40px;
cursor: pointer;
display:none;
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
border: 1px solid green;
width: 500px;
height: 40px;
color: ${({ mycolor }) => mycolor? `black` : `red`};
`;

const CompleteButton =  styled.button`
font-size: 2rem;
width: 50px;
height: 40px;
cursor: pointer;
`;



    