"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["index"],{

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHomePage)
/* harmony export */ });
function loadHomePage(){
    const homePage = document.createElement('div');

    homePage.innerHTML = ` <div class="header">
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
                    <div class="section">
                        <p>My Day</p>
                        <p class="no">4</p>
                    </div>
                    <div class="section">
                        <p>Important</p>
                        <p class="no">2</p>
                    </div>
                    <div class="section">
                        <p>Completed</p>
                        <p class="no">8</p>
                    </div>
                    <div class="section">
                        <p>Due Tasks</p>
                        <p class="no">2</p>
                    </div>
                    <div class="section final-top-cat">
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
                <div class="task">
                    <input type="checkbox" class="check">
                    <div class="task-detail">
                        <p class="task-title">write Journal</p>
                        <p class="task-date">Today</p>
                    </div>
                </div>
                <div class="task">
                    <input type="checkbox" class="check">
                    <div class="task-detail">
                        <p class="task-title">look into Dopamine Detox</p>
                        <p class="task-date">Today</p>
                    </div>
                </div>
                <div class="task">
                    <input type="checkbox" class="check">
                    <div class="task-detail">
                        <p class="task-title">Finish Todo List design</p>
                        <p class="task-date">Tommorrow</p>
                    </div>
                </div>
                <div class="task">
                    <input type="checkbox" class="check">
                    <div class="task-detail">
                        <p class="task-title">write Article FWESS</p>
                        <p class="task-date">Sun, Oct 24</p>
                    </div>
                </div>
            </div>

            <div class="task-bar">
                <button type="button">+</button>
                <input class="add-task" type="text" placeholder="Add a task">
            </div>
        </div>
    </div>`;

    document.body.appendChild(homePage);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");


console.log('whats gucci');
(0,_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])();



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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0ZzQzs7QUFFdEM7QUFDQSxxREFBWTs7OztBQUlaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKXtcbiAgICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaG9tZVBhZ2UuaW5uZXJIVE1MID0gYCA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMT5qdXN0IGRvIGl0PC9oMT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2ZpbGUtaWNvblwiPkpQPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2ZpbGUtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIm5hbWVcIj5KdXN0aW4gUG90PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BbHBoYWJldCBJbmMuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yaWVzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcC1jYXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk15IERheTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm9cIj40PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkltcG9ydGFudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm9cIj4yPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbXBsZXRlZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm9cIj44PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkR1ZSBUYXNrczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm9cIj4yPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24gZmluYWwtdG9wLWNhdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QWxsPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJub1wiPjEzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWNhdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2V0dGluZ3M8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3VwcG9ydDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmVldGluZ1wiPlxuICAgICAgICAgICAgICAgIDxoMj5CdWVuYXMgZGlhcywgPHNwYW4gaWQ9XCJ1c2VyLW5hbWVcIj5KdXN0aW48L3NwYW4+PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3MtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLXRpdGxlXCI+d3JpdGUgSm91cm5hbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay1kYXRlXCI+VG9kYXk8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLXRpdGxlXCI+bG9vayBpbnRvIERvcGFtaW5lIERldG94PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLWRhdGVcIj5Ub2RheTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGVcIj5GaW5pc2ggVG9kbyBMaXN0IGRlc2lnbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay1kYXRlXCI+VG9tbW9ycm93PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay10aXRsZVwiPndyaXRlIEFydGljbGUgRldFU1M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stZGF0ZVwiPlN1biwgT2N0IDI0PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1iYXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj4rPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYWRkLXRhc2tcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkIGEgdGFza1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhvbWVQYWdlKTtcbn0iLCJpbXBvcnQgbG9hZEhvbWVQYWdlIGZyb20gJy4vaG9tZVBhZ2UnO1xuXG5jb25zb2xlLmxvZygnd2hhdHMgZ3VjY2knKTtcbmxvYWRIb21lUGFnZSgpO1xuXG5cblxuLy9Mb2dpY1xuLy8gMS4gTXkgZGF5IGlzIGRpc3BsYXllZCBieSBkZWZhdWx0LlxuLy8gMi4gV2hlbiBjbGlja2VkIG9uIGFueSBvdGhlciBzZWN0aW9ucywgdGhlICcudGFzay1saXN0JyB3aWxsXG4vLyAgICB1cGRhdGUuXG4vLyAzLiBUaGUgdXBkYXRlIGlzIGJhc2ljYWxseSBsb2FkaW5nIHRoZSBvYmplY3Qgb3IgYXJyYXk/IGludG9cbi8vICAgIHRoZSBtYWluIHNlY3Rpb24uXG4vLyA0LiBBZGQgdGFzayB3aWxsIGFkZCBvbnRvIHRob3NlIHNlY3Rpb25zIGFjY29yZGluZ2x5LlxuLy8gNS4gSGl0dGluZyBlbnRlciBvbiBBZGQgdGFzayBhZnRlciBhZGRpbmcgYSB0YXNrIHdpbGwgb25seVxuLy8gICAgYWRkIHRpdGxlLiBcbi8vIDYuIEZ1cnRoZXIgZGV0YWlsIGNhbiBiZSBhZGRlZCBieSBjbGlja2lnbiBvbiB0YXNrLlxuLy8gNy4gRGV0YWlscyBjYW4gYmUgbW9kaWZpZWQuICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==