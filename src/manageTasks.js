import { catMyDay, catImportant, catCompleted, catDue, catAll } from './displayCats';

class Task {
    constructor(name, date, details, importance, state){
        this.name = name;
        this.date = date;
        this.details = details;
        this.importance = importance;
        this.state = state;
    }

    displayTask(){
        console.log('todo');
    }

    removeTask(){
        console.log('todo');
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

        catAll.array.push(newTask);
        catMyDay.array.push(newTask);
    
        console.log(catAll);
        console.log(catCompleted.array);
        if(newTaskImp == true){
            catImportant.array.push(newTask);
        }
        
        document.querySelector('form').reset();

        catMyDay.displayCats();
    })

}

// Future Feature //

function viewTaskDetails(){
    const listOfTasks = document.querySelectorAll('.task');
    listOfTasks.forEach((task) => {
        task.addEventListener('click', () => {
            dialogBox.showModal();

            dialogBox.addEventListener('submit', () => {
            
                let newTaskName = document.querySelector('#task-name').value;
                let newTaskDate = document.querySelector('#task-date').value;
                let newTaskDesc = document.querySelector('#task-description').value;
                let newTaskImp =  checkTaskImportance();
            
                let newTask = new Task(newTaskName, newTaskDate, newTaskDesc, newTaskImp);
                catAll.array.push(newTask);
                catMyDay.array.push(newTask);
            
            
                if(newTaskImp == true){
                    catImportant.array.push(newTask);
                }
            
                newTask = null;
                newTaskDate = null;
                newTaskDesc = null;
        
                dialogBox.close();
            })
        })
    })
}


function removeTaskFromList(){
    const taskCheckBox = document.querySelectorAll('.check');
    
    taskCheckBox.forEach((task) => {
        task.addEventListener('change', () => {
            if (task.checked) {
                console.log(task);
                task.parentNode.parentNode.removeChild(task.parentNode);
            }   
        })
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

removeTaskFromList();