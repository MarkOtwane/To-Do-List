const form = document.getElementById("form");
const tableData = document.querySelector("#tableData, tbody");

let task = JSON.parse(localStorage.getItem("")) || [];
updateDetails();

// handle the form
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    // get element in the form
    const data = document.getElementById("data").value.trim();
    const date = document.getElementById("date").value.trim();

    // create an object 
    const formData = {
        data,
        date
    }
    task.push(formData);
    
    // Each time the form is submitted it should reset
    form.reset();
});

// function
function updateDetails(){
    tableData.innerHTML = ''
    // array.foreach(element =>{});
        task.forEach(formData => {
            const formdetails = document.createElement("tr");
            formdetails.innerHTML = `
                <td>${formData.data}</td>
                <td>${formData.date}</td>
                <td><button class="edit-btn">Edit</button></td>
                <td><button class="remove-btn">Edit</button></td>
            `
            
        });

        // function to edit
        const editBtn = formData.querySelector(".edit-btn");
        editBtn.addEventListener("click", ()=>{});

        // function to delete or remove elements
        const removeBtn = formData.querySelector(".remove-btn");
        removeBtn.addEventListener("click", ()=>{});

}