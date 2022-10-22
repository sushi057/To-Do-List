const displayCategories = ( () => {

    let allTasks = [];
    let dueTasks = [];
    let completedTasks = [];
    let importantTasks = [];
    let myDayTasks = [];

    const catMyDay = categoryFactory(document.querySelector('.my-day'), myDayTasks);
    const catImortant = categoryFactory(document.querySelector('.important'), importantTasks);
    const catCompleted = categoryFactory(document.querySelector('.completed'), completedTasks);
    const catDue = categoryFactory(document.querySelector('.due-tasks'), dueTasks);
    const catAll = categoryFactory(document.querySelector('.all-tasks'), allTasks);

    const taskList = document.querySelector('.tasks-list');
       
    const showCategory = (category) => {
        category.element.addEventListener('click', () => {
            taskList.innerHTML = '';
            taskList.appendChild(arrayToTasks(category.array));
        })
    }

    // const showMyDay = () => {
    //     const myDayButton = document.querySelector('.my-day');

    //     myDayButton.addEventListener('click', () => {
    //         taskList.innerHTML = '';

    //     })
    //     taskList.appendChild(arrayToTasks(myDayTasks));

    // }

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

    //Categories Factory Function
    const categoryFactory = (element, array) => {
        return {element, array};
    }

    return {
        showCategory,
        
    }
})();