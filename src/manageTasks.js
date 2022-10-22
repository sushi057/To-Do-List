class Task {
    constructor(name, date, details, state){
        this.name = name;
        this.date = date;
        this.dtails = details;
        this.state = state;
    }

    printTask(){
        alert(this.name);
    }
}

const listOfTask = [];

//Adding a task after user presses 'Enter'
const inputBar = document.querySelector('.add-task');
inputBar.addEventListener('keydown', (e) => {
    if (e.key == 'Enter'){
        checkInput(e);
    }
})

function checkInput(e){

    if (e.target.value !== ''){
        appendTaskToList(e);
    }
    console.log('null');
}

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
    listOfTask.push(newTask);

    taskList.appendChild(singleTask); 
    console.log(listOfTask);   
}


//When Enter is pressed, a dialog appears asking for further details
function takeTaskDetails(){

}


function removeTaskFromList(){
    const taskCheckBox = document.querySelectorAll('.check');
    
    taskCheckBox.forEach((task) => {
        task.addEventListener('change', () => {
            if (task.checked) {
                console.log(this);
            }
        })
    })
}

removeTaskFromList();

function viewTaskDetails(){

}