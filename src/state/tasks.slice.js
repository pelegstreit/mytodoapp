import { createSlice } from "@reduxjs/toolkit";


const tasks = createSlice({
name:"tasks",
initialState: [],
reducers:{
    addtask: (state, action) => {state.push({"task":action.payload, "open": true, "show": true})},
    changestat: (state,action) => {state.map((obj) => {if(obj.task===action.payload) {obj.open = !obj.open} })},
    deletetask: (state, action) => {for(let i=0; i<state.length; i++){
        if(state[i].task === action.payload){
           state.splice(i, 1)
        }
    }},
    deleteAllCompleted:(state) => {for(let obj of state){
        if(obj.open === false){
           let index = state.indexOf(obj);
           state.splice(index, 1);
        }
    }},
    showAll:(state) => {state.map((obj) => { obj.show = true} )},
    showActive:(state) => {state.map((obj) => {obj.open? obj.show = true : obj.show = false} )},
    showClosed:(state) => {state.map((obj) => {obj.open? obj.show = false : obj.show = true})},

    
}
})
export default tasks.reducer;
export const {addtask,changestat, deletetask,deleteAllCompleted,showAll,showActive,showClosed} = tasks.actions;

//state.filter(obj => obj.task != action.payload)
//state.filter((obj) => obj.open === true )