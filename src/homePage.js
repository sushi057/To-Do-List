export default function loadHomePage(){
    const homePage = document.createElement('div');

    homePage.innerHTML = `
    <div class="header">
    <h1>just do it</h1>
</div>

<div class="container">

    <div class="sidebar">
        <div class="profile">
            <div class="profile-icon">JP</div>
            <div class="profile-text">
                <p id="name">Justin Pot</p>
                <p>Alphabet Inc.</p>
            </div>
        </div>

        <div class="categories">
            <div class="top-cat">
                <div class="section my-day">
                    <p>My Day</p>
                    <p class="no">4</p>
                </div>
                <div class="section important">
                    <p>Important</p>
                    <p class="no">2</p>
                </div>
                <div class="section completed">
                    <p>Completed</p>
                    <p class="no">8</p>
                </div>
                <div class="section due-tasks">
                    <p>Due Tasks</p>
                    <p class="no">2</p>
                </div>
                <div class="section all-tasks final-top-cat">
                    <p>All</p>
                    <p class="no">13</p>
                </div>
            </div>
            <div class="bottom-cat">
                <div class="section">
                    <p>Settings</p>
                </div>
                <div class="section">
                    <p>Support</p>
                </div>
            </div>
        </div>
    </div>

    <div class="main">
        <div class="greeting">
            <h2>Buenas dias, <span id="user-name">Justin</span></h2>
        </div>

        <div class="tasks-list">
        </div>

        <div class="task-bar">
            <button type="button">+</button>
            <input class="add-task" type="text" placeholder="Add a task">
        </div>
    </div>

    <dialog>
        <form method='dialog'>
            <label for="task-name">Name:</label>
            <input id="task-name" type="text" name="task-name" />
            <label for="task-date">Date</label>
            <input id="task-date" type="date" name="task-date" required />
            <label for="task-description">Description:</label>
            <textarea id="task-description" type="text" name="task-name" placeholder="Write task description"></textarea>
            <p>
            <label for="task-importance">Important:</label>
            <input id="task-importance" type="checkbox" name="task-importance" />
            </p>

            <p>
            <input type="button" id='button' value="Cancel">
            <input type="submit" id='submit' value="Submit">
            </p>
        </form>
    </dialog>

</div>
    `

    document.body.appendChild(homePage);
}

