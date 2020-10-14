const myCustomDiv = document.createElement('div');

function respondToTheClick(evt) {
    console.log('A paragraph was clicked: ' + evt.target.textContent);
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

myCustomDiv.addEventListener('click', respondToTheClick);
//main uses to fetch javascript code in head tag if you want to run javascript as fast as possible and this faster than javascript in body
document.addEventListener("DOMContentLoaded", function () { 
    console.log("the DOM is ready to be interacted with!");
});
//write it in console