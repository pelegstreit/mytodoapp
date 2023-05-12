const {VITE_SERVER_URL} = import.meta.env;

export async function getTasksfromDB(){
    const endpoint = `${VITE_SERVER_URL}/task`;
    const response = convertTaskServtoclient(await (await fetch(endpoint, {
        method: "GET",
        headers:{"Content-Type": "application/json"},
    })).json());
    console.log(response);
    return response;
}

export async function sendTasks(){
    const endpoint = `${VITE_SERVER_URL}/task`;
    fetch(endpoint, {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({task})
    })
}

function convertTaskServtoclient(serverarray){
    return serverarray.map((obj)=>{
    return {
    task: obj.title,
    open: !obj.done,
    show: true,
    }
})     
}