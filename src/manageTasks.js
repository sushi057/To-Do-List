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
        const taskList = document.querySelector('.tasks-list');

        const newTask = document.createElement('div');
        newTask.classList.add('task');

        newTask.innerHTML = `
            <input type="checkbox" class="check">
            <div class="task-detail">
                <p class="task-title">${this.name}</p>
                <p class="task-date">${this.date}</p>
            </div>
            `

        taskList.appendChild(newTask)
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
            dialogBox.showModal();
            document.querySelector('#button').addEventListener('click', () => {
                dialogBox.close();
            })
        
            document.querySelector('#task-name').value = e.target.value;
            dialogBox.addEventListener('submit', () => {
            
                const newTaskName = document.querySelector('#task-name').value;
                const newTaskDate = document.querySelector('#task-date').value;
                const newTaskDesc = document.querySelector('#task-description').value;
                const newTaskImp =  checkTaskImportance();
            
                const newTask = new Task(newTaskName, newTaskDate, newTaskDesc, newTaskImp);
        
                console.log(catMyDay.array);

                catAll.array.push(newTask);
                catMyDay.array.push(newTask);
        
                if(newTaskImp == true){
                    catImportant.array.push(newTask);
                }

                console.log(catMyDay.array);
        
                newTask.displayTask();
                catMyDay.displayCats();
                document.querySelector('form').reset();
            })

            e.target.value = null;
        }
        else{
            alert('Enter Task Name');
        }
    }
})


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
