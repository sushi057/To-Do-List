import loadHomePage from './homePage';
import './style.css';
import displayCats from './displayCats';

console.log('whats gucci');
loadHomePage();
displayCats();


//Logic
// 1. My day is displayed by default.
// 2. When clicked on any other sections, the '.task-list' will
//    update.
// 3. The update is basically loading the object or array? into
//    the main section.
// 4. Add task will add onto those sections accordingly.
// 5. Hitting enter on Add task after adding a task will only
//    add title. 
// 6. Further detail can be added by clickign on task.
// 7. Details can be modified. 