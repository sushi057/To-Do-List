export default function displayCats() {

    let allTasks = [];
    let dueTasks = [];
    let completedTasks = [];
    let importantTasks = [];
    let myDayTasks = [];

    //Categories Factory Function
    const categoryFactory = (element, array) => {
        return {element, array};
    }

    const taskList = document.querySelector('.tasks-list');
    const catMyDay = categoryFactory(document.querySelector('.my-day'), myDayTasks);
    const catImortant = categoryFactory(document.querySelector('.important'), importantTasks);
    const catCompleted = categoryFactory(document.querySelector('.completed'), completedTasks);
    const catDue = categoryFactory(document.querySelector('.due-tasks'), dueTasks);
    const catAll = categoryFactory(document.querySelector('.all-tasks'), allTasks);

    const categoriesArray = [catMyDay, catCompleted, catDue, catImortant, catAll];

    console.log(categoriesArray);
    
    categoriesArray.forEach(category => {
        // category.element.querySelector('.no').textContent = category.array.length;
        category.element.addEventListener('click', () => {
        taskList.innerHTML = '';

        arrayToTasks(category.array);
       }) 
    });



    function arrayToTasks(array) {
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

    function updateNumberOfTasks(category) {

    }
}