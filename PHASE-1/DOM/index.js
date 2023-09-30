
// if i need to select the first div
//myDocument.html.body.div //this is messy
//therefore the need to use selectors
//selectors help in selecting specific elements
//document.querySelector("h1")
//in DOM, html elemets are called nodes, DOM nodes
/* // elements available;
1. getElemenetByID()
2. getElementsByClassName()
3. getElementsByTagName() */

//const myHeader = document.getElementById('my-header');

//console.log(myHeader);
//if index.js is linked at the head it wont display 
//therefore, link it below the body;before the body closing tag
//else, with the js linked at the head, add an event listener.

/* document.addEventListener('DOMContentLoaded', () =>{
    const myHeader = document.getElementById('my-header');

console.log(myHeader);
}) */

/* const myHeader = document.getElementById('my-header');

console.log(myHeader);

const divElements = document.getElementsByClassName('my-div');

console.log(divElements);

const  h1Tags = document.getElementsByTagName('h1');

console.log(h1Tags);

//accessing tthe second header, use its index since
//the output was an array
const secondHeader = h1Tags[1];

console.log(secondHeader);
//dynamically modifying the DOM; from 'some h1' to 'new header'
secondHeader.textContent = 'New Header' */

//query selector

const element= document.querySelector('ul.ranked-list li ul li')

console.log(element)

const secondElement = document.querySelector('ul.unranked-list li div')

console.log(secondElement)

//query selectorAll
const divs = document.querySelectorAll('div')

console.log(divs)