const form = document.getElementById("form");
const table = document.querySelector("#tableData tbody");


const task = JSON.parse(localStorage.getItem("task")) || [];
addData();

form.addEventListener("submit", (ev)=>{
    ev.preventDefault();
    

    const taskData = document.getElementById("data").value.trim();
    const taskDate = document.getElementById("date").value.trim();
    
    //create an object for this
    const dataObject = {
        taskData, 
        taskDate
    };

    task.push(dataObject);//push it to the array

    localStorage.setItem("task", JSON.stringify(task));//set items /save items
    addData();

    form.reset();
});

function addData(){
    table.innerHTML = ''

    task.forEach(dataObject =>{
        const formData = document.createElement("tr");
        formData.innerHTML = `
            <td>${dataObject.taskData}</td>
            <td>${dataObject.taskDate}</td>
            <button id="submit">Submit</button>
        `
    })
    table.appendChild(formData)
}