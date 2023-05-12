import { createSlice } from "@reduxjs/toolkit";
const {VITE_SERVER_URL} = import.meta.env;

const tasks = createSlice({
name:"tasks",
initialState: {mytasks: [], isLoading: false,
    errorMessage: '',},
reducers:{
    fetchTasksStarted: (state) => {
        state.isLoading = true;
      },
      fetchTasksFailed: (state, action) => {
        state.errorMessage = action.payload;
      },
    getInitialTasks: (state, action) => {
        state.mytasks = action.payload;
        state.isLoading = false;
        state.errorMessage = "";
    },
    addtask: (state, action) => {
        state.mytasks.push({"task":action.payload, "open": true, "show": true});
        console.log(state.mytasks);
    },
    changestat: (state,action) => {state.mytasks.map((obj) => {if(obj.task===action.payload) {obj.open = !obj.open} })},
    deletetask: (state, action) => {for(let i=0; i<state.mytasks.length; i++){
        if(state.mytasks[i].task === action.payload){
           state.mytasks.splice(i, 1)
        }
    }},
    deleteAllCompleted:(state) => {
    let newTaks= state.mytasks.filter(obj => obj.open === true);
    state.mytasks =  newTaks;
    
    }},
    showAll:(state) => {state.mytasks.map((obj) => { obj.show = true} )},
    showActive:(state) => {state.mytasks.map((obj) => {obj.open? obj.show = true : obj.show = false} )},
    showClosed:(state) => {state.mytasks.map((obj) => {obj.open? obj.show = false : obj.show = true})},

    

})
export default tasks.reducer;
export const {fetchTasksStarted,fetchTasksFailed,getInitialTasks,addtask,changestat, deletetask,deleteAllCompleted,showAll,showActive,showClosed} = tasks.actions;

export const fetch_tasks = () => async (dispatch)=> {
    try{
        console.log("fetch_tasks started");
        dispatch(fetchTasksStarted());
        let endpoint = "http://localhost:3030/gettasks";
        const response = await (await fetch(endpoint)).json();
       console.log(response);
       dispatch(getInitialTasks(convertTaskServtoclient(response)));
    }catch(err){   
        dispatch(fetchTasksFailed(err.errorMessage));
    }
  };
  
export const AddnewTask = (taskname) => async (dispatch)=> {
    try{
        console.log("AddnewTask started");
        // dispatch(fetchTasksStarted());
        let endpoint = "http://localhost:3030/addtask";
        const response = await (await fetch(endpoint, {method:"POST",crossDomain: "true",headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
           title: taskname, done: false
          }),
          } )).json();
       console.log(response);
    //    dispatch(addtask());
    }catch(err){   
        // dispatch(fetchTasksFailed(err.errorMessage));
        console.log(err);
    }
  };
  export const updateTaskStatus = (taskId, status) => async (dispatch)=> {
    try{
        console.log("updateTask started");
        let endpoint = `http://localhost:3030/updateTask/${taskId}`;
        const response = await (await fetch(endpoint, {method:"put",crossDomain: "true",headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            done: status
          }),
          } )).json();
       console.log(response);
    }catch(err){   
        console.log(err);
    }
  };
export const deletetaskfromDB = (taskId) => async (dispatch)=> {
    try{
        console.log("deletetask started");
        let endpoint = `http://localhost:3030/deleteTask/${taskId}`;
        const response = await (await fetch(endpoint, {method:"delete",crossDomain: "true",headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          })).json();
       console.log(response);
    }catch(err){   
        console.log(err);
    }
  };

  export const deleteAllCompletedtasks = (taskId) => async (dispatch)=> {
    try{
        console.log("deleteAllCompletedtasks started");
        // for (let taskId in completedArr)
        // {
      
            let endpoint = `http://localhost:3030/deleteTask/${taskId}`;
            let response = await (await fetch(endpoint, {method:"delete",crossDomain: "true",headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              })).json();
           console.log(response);
            // }
       
    }catch(err){   
        console.log(err);
    }
  };



function convertTaskServtoclient(serverarray){
    return serverarray.map((obj)=>{
    return {
    task: obj.title,
    open: !obj.done,
    show: true,
    id: obj._id,
    }
})     
};