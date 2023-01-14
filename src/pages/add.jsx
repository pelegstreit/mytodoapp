import styled from "styled-components";
import {addtask} from "../state/tasks.slice"
import {useSelector,useDispatch} from "react-redux";

const Add = () => {
    
  const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    function clearInput(){
      let getValue= document.getElementById("mytasks");
        if (getValue.value !="") {
            getValue.value = "";
        }
 }
 function myclick(){
  dispatch(addtask(document.getElementById("mytasks").value));
  clearInput();
 }
  return (
   <Top>
    <Input id="mytasks" placeholder="Enter your next mission"/>
    <Btn onClick={ myclick} > Add</Btn>
    </Top>
  )
}
//dispatch(addtask(document.getElementById("mytasks").value))
//tasks.push({"task": "learn", "open": true})

export default Add
const Top = styled.div` width: 600px;
width: 600px;
/* border: 1px solid red; */
font-family: "Roboto", sans-serif;
display: flex;
flex-direction: row;
margin-top: 0rem;
padding-top: 0px;
`
const Btn = styled.button`
font-size: 2rem;
width: 100px;
height: 40px;
`;
const Input = styled.input`
  font-size: 30px;
  /* padding: 10px; */
  /* margin: 10px; */
  /* background: papayawhip; */
  border: 1px solid black;
  width: 500px;
  ::placeholder {
    color:black;
  }
`;