import { catMyDay, catImportant, catCompleted, catDue, catAll } from './displayCats';

class Task {
    constructor(name, date, details, importance, state){
        this.name = name;
        this.date = date;
        this.dtails = details;
        this.importance = importance;
        this.state = state;
    }

    printTask(){
        alert(this.name);
    }
}


//Adding a task after user presses 'Enter'
const inputBar = document.querySelector('.add-task');
inputBar.addEventListener('keydown', (e) => {
    if (e.key == 'Enter'){
        if (e.target.value !== ''){
            appendTaskToList(e);
        }
        else{
            alert('Enter Task Name');
        }
    }
})


function appendTaskToList(e){
    const taskList = document.querySelector('.tasks-list');

    const singleTask = document.createElement('div');
    singleTask.classList.add('task');

    singleTask.innerHTML = `
        <input type="checkbox" class="check">
        <div class="task-detail">
            <p class="task-title">${e.target.value}</p>
            <p class="task-date"></p>
            </div>
        </div>`


    let newTask = new Task(e.target.value);
    allTasks.push(newTask);

    e.target.value = null;  

    taskList.appendChild(singleTask); 
    console.log(listOfTask);   
}


//When task is clicked, a dialog appears asking for further details
function takeTaskDetails(){

}

function viewTaskDetails(){

}

function removeTaskFromList(){
    const taskCheckBox = document.querySelectorAll('.check');
    
    taskCheckBox.forEach((task) => {
        task.addEventListener('change', () => {
            if (task.checked) {
                console.log(task);
                task.style.pointerEvents = 'none';
            }
        })
    })
}

function categoriseTasks(){

}

removeTaskFromList();
