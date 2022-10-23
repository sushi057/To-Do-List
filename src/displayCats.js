class Category {
    constructor(element){
        this.element = element;
        this.array = [];
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

const catMyDay = Category(document.querySelector('.my-day'));
const catImportant = Category(document.querySelector('.important'));
const catCompleted = Category(document.querySelector('.completed'));
const catDue = Category(document.querySelector('.due-tasks'));
const catAll = Category(document.querySelector('.all-tasks'));


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
    catMyDay,
    catImportant,
    catCompleted,
    catDue,
    catAll,
}