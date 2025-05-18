const form = document.getElementById("form");
const table = document.querySelector("#tableData tbody");


const task = JSON.parse(localStorage.getItem("task")) || [];
addData();
deleteData();

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
    addData();

    localStorage.setItem("task", JSON.stringify(task));//set items /save items
    

    form.reset();
});

function addData(){
    table.innerHTML = ''

    task.forEach(dataObject =>{
        const formData = document.createElement("tr");
        formData.innerHTML = `
            <td>${dataObject.taskData}</td>
            <td>${dataObject.taskDate}</td>
            <td><button class="edit-btn">Edit</button></td>
            <td><button class="deleteData">Delete</button></td>
        `
        // append should be inside the loop
        table.appendChild(formData)
    });

     // Function to remove an item from the scheduler
     const removeBtn = document.querySelector(".deleteData");
     removeBtn.addEventListener("click", () => {
     formData.remove(); // remove the row
     task.splice(index, 1); // remove the task from the array
     localStorage.setItem("task", JSON.stringify(task));
 });
 const editBtn = document.querySelector(".edit-btn");
 editBtn.addEventListener("click", ()=>{
     // Create an in[put field] ide
     const inputField = document.createElement("input")
     // Identify which task is to be edited, replace the display text with an input containing the existing data, listen for a save of blur event, update the data on your local storage
     inputField.type = "text";
     formData.append(inputField);
     // tasks.trim(index, 1)
     localStorage.setItem("task", JSON.stringify(task));
 });
    
}