import styled from "styled-components";
import {useSelector,useDispatch} from "react-redux";
import {deleteAllCompleted,showAll,showActive,showClosed} from "../state/tasks.slice"

const Filter = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    let counter = 0;
    // let isopen = false;
    function checkforopen(array) {  
      for(let obj of array){
        if(obj.open === false){
           counter= counter +1
        }
    }
    if(counter>0)
    {
      // isopen= true;
      return true;
    }
    else{
      // isopen= false;
      return false;
    }
      };
      let isopen = checkforopen(tasks)



    function allclick(){
      dispatch(showAll());
      document.getElementById("ShowAll").style.backgroundColor = `turquoise`;
      document.getElementById("ShowActive").style.backgroundColor = `grey`;
      document.getElementById("ShowClose").style.backgroundColor = `grey`;
     }
     function activeclick(){
      dispatch(showActive());
      document.getElementById("ShowAll").style.backgroundColor = `grey`;
      document.getElementById("ShowActive").style.backgroundColor = `turquoise`;
      document.getElementById("ShowClose").style.backgroundColor = `grey`;
     }
     function closeclick(){
      dispatch(showClosed());
      document.getElementById("ShowAll").style.backgroundColor = `grey`;
      document.getElementById("ShowActive").style.backgroundColor = `grey`;
      document.getElementById("ShowClose").style.backgroundColor = `turquoise`;
     }
    
   

  return (
   <Buttom>
    <Div>{tasks.length - counter} items left</Div>
    <ShowAll id="ShowAll" onClick={()=>allclick()} >All</ShowAll>
    <ShowActive id="ShowActive" onClick={()=>activeclick()} >Active</ShowActive>
    <ShowClose id="ShowClose" onClick={()=>closeclick()} >Completed</ShowClose>
    <DeleteCompleted onClick={()=>dispatch(deleteAllCompleted())} >Clear completed</DeleteCompleted>
    {/* <ShowAll onClick={()=>console.log(isopen, counter)}>TESTS</ShowAll> */}
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
border-radius: 20%;
`;

const ShowActive = styled.button`
font-size: 2rem;
width: 125px;
height: 50px;
cursor: pointer;
background-color: grey;
border-radius: 20%;
`;

const ShowClose = styled.button`
font-size: 2rem;
width: 125px;
height: 50px;
cursor: pointer;
background-color: grey;
border-radius: 20%;
`;

const DeleteCompleted = styled.button`
font-size: 2rem;
width: 125px;
height: 50px;
cursor: pointer;
display: none;
`;

const Div = styled.div`
  font-size: 20px;
  width: 125px;
  height: 50px;
  text-align: center;
  padding: 14px 0;
`;