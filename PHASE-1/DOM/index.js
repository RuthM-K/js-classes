
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


//dom manipulation--on wednesday
//1. creating elements dynamically
const paragraph= document.createElement('p')

//adding content to elements
paragraph.innerText = 'This is my first dynamic paragraph tag'

//2. adding elements to the dom
const domManipulationDiv = document.getElementById('DOM manipulation')
domManipulationDiv.append(paragraph)

console.log(domManipulationDiv)

// adding elements using inerHTML
const h1Tag= `<h1>H1 Tag</h1>`
//domManipulationDiv.innerHTML = h1Tag //deletes every other element within the parent tag
domManipulationDiv.append(document.createElement('h1'));//.append places the new element below the previous


//more examples on creating, adding  & appending elements
const headerTwo= document.createElement('h2')
//console.log(headerTwo)

//after creating it, add some text into the h2 using .inntertext
headerTwo.innerText= 'This is my second header'
//console.log(headerTwo)
//last step, append or attach the dynamically created element and attach it where needed
//in this case, append the he to the dommanipulationdiv.
domManipulationDiv.append(headerTwo)

//create anchor tag
const link= document.createElement('a')
link.innerText= 'Wikipedia'
link.href= 'https://en.wikipedia.org/wiki/Ada_Lovelace'

console.log(link)

domManipulationDiv.append(link)

//using the .innerhtml
//use backticks to be able to add new values
const secondDiv= document.getElementById('dom');

//to add styles; but its best to use css instead of changing it dynamically
secondDiv.style.backgroundColor= '#f2f'


const elements= `
    <p> This is the second div ${new Date().getFullYear()}</p>
    <h1><h1>
    <h2> This  is the second div</h2>
    <a href="https://en.wikipedia.org/wiki/Ada_Lovelace">Ada Lovelace</a>
`;

secondDiv.innerHTML= elements