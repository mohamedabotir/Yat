/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sectionList=document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const fragment=document.createDocumentFragment();
const nav=document.querySelector("#navbar__list");
sectionList.forEach(add);
nav.appendChild(fragment);
function add(list) {
	const listItem=document.createElement("li");
	listItem.innerHTML=`<a href="#${list.getAttribute("id")}">${list.getAttribute("data-nav")}</a>`;
	listItem.style.cssText="list-style:none;";
	fragment.appendChild(listItem);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


