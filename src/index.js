import loadHomePage from './homePage';
import './style.css';
import { catMyDay, catImportant, catCompleted, catDue, catAll } from './displayCats';

console.log('whats gucci');
loadHomePage();



// document.querySelector('dialog').showModal();



//Display Cats
console.log(catAll.element);
document.querySelector('.my-day').addEventListener('click', ()=> {
    catMyDay.displayCats();
})

// catMyDay.displayCats();
// catImportant.displayCats();
// catCompleted.displayCats();
// catDue.displayCats();
// catAll.displayCats();

