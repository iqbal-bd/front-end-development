//dom = document object model
const welcome = document.getElementById("welcome-session")
welcome.style.color = "black";
welcome.style.backgroundColor = "gray";
welcome.style.border = "5px solid black";

const heading = document.getElementsByClassName("heading")[1];
heading.style.color = "blue";
heading.style.backgroundColor = "yellow"


const headingAll = document.querySelectorAll(".heading")
// console.log( headingAll );

const getName = document.getElementById("name").getAttribute("id");
console.log( getName );

const setName = document.getElementById("name");
setName.setAttribute("class", "name");

const createClass = document.getElementsByClassName("name");
console.log( createClass );
createClass[0].style.color = "green";
                // or 
const createClass1 = document.getElementsByClassName("name")[0];
console.log( createClass1 );
createClass1.style.color = "green";

const tagName = document.getElementsByTagName("p")[1];
tagName.style.color="violet"



const itemContainer = document.getElementById("item-container")
console.log(itemContainer.childNodes)

// add items

const item5 = document.createElement("li");
item5.innerText = "This is a paragraph"
console.log(item5);
itemContainer.appendChild(item5);

// input items manually

function handleChange(event) {
    const value = event.target.value;
    const itemContainer = document.getElementById("item-container");
    const addItem = document.createElement("li");
    addItem.innerText = value;
    itemContainer.appendChild(addItem);

}

//remove items

itemContainer.addEventListener("click",function(event){
    const item = event.target;
    const parent = event.target.parentNode;
    parent.removeChild(item);
})

// color change by click
function handleButton(){
    const btn = document.getElementById("item-container");
    btn.style.color = "blue"
}

function handleUnclick(){
    const btn = document.getElementById("item-container");
    btn.style.color = "black"
}


const btn = document.getElementById("btn");
btn.addEventListener("click", handleButton)//(ghotona ki hoise, ei ghotonar jonne ki korbo)

const container = document.getElementById("container");
container.addEventListener("click", function(event){
    console.log("container clicked")
   const btn = document.getElementById("container-item");
   btn.style.backgroundColor="yellow";
   const btn2 = document.getElementById("item");
   btn2.style.backgroundColor="red";
   const btn3 = document.getElementById("container");
   btn3.style.backgroundColor="blue";
   
})

const containerItem = document.getElementById("container-item");
containerItem.addEventListener("click", function(event){
    console.log("container-item clicked")
   event.stopPropagation(); 
   const btn = document.getElementById("item");
   btn.style.backgroundColor="blue";
   const btn2 = document.getElementById("container");
   btn2.style.backgroundColor="yellow";
   const btn3 = document.getElementById("container-item");
   btn3.style.backgroundColor="red";
})

const item = document.getElementById("item");
item.addEventListener("click", function(event){
    console.log("item clicked");
   event.stopPropagation();
   const btn = document.getElementById("container-item");
   btn.style.backgroundColor="blue";
   const btn2 = document.getElementById("container");
   btn2.style.backgroundColor="red";
   const btn3 = document.getElementById("item");
   btn3.style.backgroundColor="yellow";
   
})

//event.stopImmediatePropagation();


const first = () =>{
    console.log("This is first program")
    second();
}

const second = () =>{
    console.log("This is second program")
}

const third =() =>{
    first();
    console.log("This is third program")
}

third()
