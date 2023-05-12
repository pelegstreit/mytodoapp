import styled from "styled-components";
import {addtask,AddnewTask} from "../state/tasks.slice"
import {useSelector,useDispatch} from "react-redux";
import { useState } from "react";


const Add = () => {
    
  const tasks = useSelector((state) => state.tasks.mytasks);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  
 function myclick(){
  if(inputValue){
    for (let obj of tasks) {
      if (obj.task === inputValue) {
        alert("You canot enter the same task twice");
        setInputValue('');
        return inputValue;
      }
    }
  dispatch(AddnewTask(inputValue))
  dispatch(addtask(inputValue));
  setInputValue('')
  }
  else{
    alert("You canot enter blank task")
  }
 }

  return (
   <Top>
    <Input value={inputValue}  onChange={(text) => setInputValue(text.target.value)} placeholder="Enter your next mission"/>
    <Btn onClick={myclick} > Add</Btn>
    </Top>
  )
}


export default Add
const Top = styled.div` width: 600px;
width: 600px;
font-family: "Roboto", sans-serif;
display: flex;
flex-direction: row;
margin-top: 0rem;
padding-top: 0px;
`
const Btn = styled.button`

width: 100px;
height: 40px; 
background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3e8e41;
  }
`;
const Input = styled.input`
  font-size: 30px;
  border: 1px solid black;
  width: 500px;
  ::placeholder {
    color:black;
  }
  
`;