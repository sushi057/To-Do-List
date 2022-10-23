import {myDayTasks, importantTasks, completedTasks, dueTasks, allTasks} from './manageTasks';

class Category {
    constructor(element, array){
        this.element = element;
        this.array = array;
    }

    displayCats(){
        this.array.forEach(category => {
            category.element.addEventListener('click', () => {
                taskList.innerHTML = '';
        
                arrayToTasks(category.array);
            })
        })
    }

    showArray(){
        return this.array;
    }
}

const catMyDay = Category(document.querySelector('.my-day'), myDayTasks);
const catImortant = Category(document.querySelector('.important'), importantTasks);
const catCompleted = Category(document.querySelector('.completed'), completedTasks);
const catDue = Category(document.querySelector('.due-tasks'), dueTasks);
const catAll = Category(document.querySelector('.all-tasks'), allTasks);



const arrayToTasks = (array) => {
    array.forEach(element => {
        const newTask = document.createElement('div');
        newTask.classList.add('task');

        newTask.innerHTML = `
        <input type="checkbox" class="check">
                <div class="task-detail">
                    <p class="task-title">${element.name}</p>
                    <p class="task-date">${element.date}</p>
                </div>
        `
        taskList.appendChild(newTask);
    });
}

export{
    arrayToTasks,
    displayCats,
}