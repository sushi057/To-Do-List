import loadHomePage from './homePage';
import './style.css';
import { catMyDay, catImportant, catCompleted, catDue, catAll, displayCategories } from './displayCats';

loadHomePage();

// document.querySelector('dialog').showModal();

displayCategories();