let task = document.querySelector('#addTask');
let tasksToAdd = document.querySelector("#submitTask");
taskList = document.querySelector("#taskList")

tasksToAdd.addEventListener('click', function(){
    event.preventDefault()
    var tableRow = document.createElement('tr');
    tableRow.textContent = task.value;
    taskList.appendChild(tableRow)
    task.value='';

})


// What is the id/class of
// Where are we adding the event listener
//