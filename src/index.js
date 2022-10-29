import loadHomePage from './homePage';
import './style.css';
import { catMyDay, catImportant, catCompleted, catDue, catAll, displayCategories } from './displayCats';
// import removeTaskFromList from './manageTasks';

loadHomePage();
displayCategories();
// removeTaskFromList();