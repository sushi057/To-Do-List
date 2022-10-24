class Category {
    constructor(element){
        this.element = element;
        this.array = [];
    }

    displayCats(){
        const taskList = document.querySelector('.tasks-list');
        taskList.innerHTML = '';
        console.log('display cats');

        this.array.forEach(element => {
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
        console.log(this.array);
    }
}

const catMyDay = new Category(document.querySelector('.my-day'));
const catImportant = new Category(document.querySelector('.important'));
const catCompleted = new Category(document.querySelector('.completed'));
const catDue = new Category(document.querySelector('.due-tasks'));
const catAll = new Category(document.querySelector('.all-tasks'));

function displayCategories() {
    document.querySelector('.my-day').addEventListener('click', () => {
        catMyDay.displayCats();
    })
    
    document.querySelector('.important').addEventListener('click', () => {
        catImportant.displayCats();
    })

    document.querySelector('.completed').addEventListener('click', () => {
        catCompleted.displayCats();
    })

    document.querySelector('.due-tasks').addEventListener('click', () => {
        catDue.displayCats();
    })

    document.querySelector('.all-tasks').addEventListener('click', () => {
        catAll.displayCats();
    })
}

export{
    catMyDay,
    catImportant,
    catCompleted,
    catDue,
    catAll,
    displayCategories,
}