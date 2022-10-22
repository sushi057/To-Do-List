const displayCategories = ( () => {

    let allTasks = [];
    let dueTasks = [];
    let completedTasks = [];
    let importantTasks = [];
    let myDayTasks = [];

    const taskList = document.querySelector('.tasks-list');
        
    const showMyDay = () => {
        const myDayButton = document.querySelector('.my-day');

        myDayButton.addEventListener('click', () => {
            taskList.innerHTML = '';

        })

        taskList.appendChild(arrayToTasks(myDayTasks));

    }

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
})