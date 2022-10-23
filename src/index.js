import loadHomePage from './homePage';
import './style.css';
import { catMyDay, catImportant, catCompleted, catDue, catAll } from './displayCats';

console.log('whats gucci');
loadHomePage();

document.querySelector('dialog').show();

//Display Cats
console.log(catAll.element);
// catMyDay.displayCats();
// catImportant.displayCats();
// catCompleted.displayCats();
// catDue.displayCats();
// catAll.displayCats();

