import { catMyDay, catImportant, catCompleted, catDue, catAll } from './displayCats';

class Task {
    constructor(name, date, details, importance, state){
        this.name = name;
        this.date = date;
        this.details = details;
        this.importance = importance;
        this.state = state;
    }

    printTask(){
        alert(this.name);
    }
}


const taskList = document.querySelector('.tasks-list');
const dialogBox = document.querySelector('dialog');


//Adding a task after user presses 'Enter'
const inputBar = document.querySelector('.add-task');
inputBar.addEventListener('keydown', (e) => {
    if (e.key == 'Enter'){
        if (e.target.value !== ''){
            takeTaskDetails(e);
            e.target.value = null;
        }
        else{
            alert('Enter Task Name');
        }
    }
})


// function appendTaskToList(e){
//     const taskList = document.querySelector('.tasks-list');

//     const singleTask = document.createElement('div');
//     singleTask.classList.add('task');

//     singleTask.innerHTML = `
//         <input type="checkbox" class="check">
//         <div class="task-detail">
//             <p class="task-title">${e.target.value}</p>
//             <p class="task-date"></p>
//             </div>
//         </div>` 


//     let newTask = new Task(e.target.value);
//     catAll.array.push(newTask);
//     catMyDay.array.push(newTask);

//     //Consider the date for catDue
//     taskList.appendChild(singleTask); 
//     console.log(catAll);   
// }


//When task is clicked, a dialog appears asking for further details
function takeTaskDetails(e){

    dialogBox.showModal();
    document.querySelector('#button').addEventListener('click', () => {
        dialogBox.close();
    })

    document.querySelector('#task-name').value = e.target.value;
    dialogBox.addEventListener('submit', () => {
        const singleTask = document.createElement('div');
        singleTask.classList.add('task');
    
        let newTaskName = document.querySelector('#task-name').value;
        let newTaskDate = document.querySelector('#task-date').value;
        let newTaskDesc = document.querySelector('#task-description').value;
        let newTaskImp =  checkTaskImportance();
    
        let newTask = new Task(newTaskName, newTaskDate, newTaskDesc, newTaskImp);
        console.log(catAll);
        catAll.array.push(newTask);
        catMyDay.array.push(newTask);
    
        catMyDay.displayCats();
    
        if(newTaskImp == true){
            catImportant.push(newTask);
        }
    
        newTask = null;
        newTaskDate = null;
        newTaskDesc = null;

        dialogBox.close();
    })

}

function checkTaskImportance(){
    if (document.querySelector('#task-importance').checked){
        document.querySelector('#task-importance').checked = false;
        return true;
    }
    else{
        return false;
    }
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

removeTaskFromList();
