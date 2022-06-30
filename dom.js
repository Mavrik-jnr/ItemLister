// Examine the document Object
// console.dir(document)

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.forms[0]);
// console.log(document.getElementById('sub'));



// Accessing Selectors using DOM

// console.log(document.getElementsByClassName('form'))
// GET


// Get Elements by Tagname
li = document.getElementsByTagName('li')
console.log(li)

//QUERY SELECTOR //

// var header = document.querySelector('.card')
// header.style.backgroundColor = 'blue'

// QUERY SELECTS ANYTHING// 

// Traversing the DOM

itemList = document.querySelector('.items');

// console.log(itemList.parentNode)

// itemList.parentNode.style.color = 'maroon'
itemList.parentNode.style.backgroundColor  = '#f4f4f4'

// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)


/////ParentElement Document property is the same as Parent Node property


//childnodes has a caveat of returning unwanted list items

// console.log(itemList.childNodes);

// children .. USe children

console.log(itemList.children)

// itemList.children[1].style.backgroundColor = 'yellow';


// FIrst child,  this uses a childNode List as a reference, which can potentially be a 'text'

console.log(itemList.firstChild);


// FirstElementChild it selects the actual useful first element

// console.log(itemList.firstElementChild);



// SIBLINGS
// dont use nextSibling because of the 'text' issue
// nextElementSibling, beter
console.log(itemList.nextElementSibling);


//previousSibling again not recommended
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
// itemList.previous



// createElement

// create a div
let newDiv = document.createElement('div')
console.log(newDiv);
newDiv.className = 'hello'
// newDiv.style.backgroundColor = 'maroon'
newDiv.style.height = '20vh'
newDiv.style.width = '100%'
// You can set some attributes
newDiv.setAttribute('title', 'Hello Div')

//creating a textNode for the element to have some content

var NodeText = document.createTextNode('Hello world');

// Add text to div

newDiv.appendChild(NodeText)


// To insert into DOM



// to add an element to the DOM, you pick the element (soon to be parent element), then pick a 'DIRECT CHILDELEMENT' to use the insertBefore method then specify what you're inserting and the child element of the parent that you're inserting the new element into
let headers = document.querySelector('.container');
let h2 = document.querySelector('.card');

// headers.insertBefore(newDiv, h2);



// events

// function for the event triggered
function omo(e){
    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';
    console.log(e.shiftKey)
    }
// grabbing the button within javascript to check for events

var button = document.getElementById('sell').addEventListener('click',omo);

var buy = document.getElementById('buy');

var box = document.getElementById('box');


// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mousemove', runEvent);
// box.addEventListener('mouseenter', runEvent);
buy.addEventListener('click',runEvent);
buy.addEventListener('mousedown', runEvent);
// buy.addEventListener('hover', runEvent);
// let i = 0



// Updating order
option = document.querySelector('select')
function update(e){
    let Coin = e.target.innerText
    console.log(e)
    output.innerHTML = '<small>Your Order for '+option.value+' '+Coin+' has been placed and cannot be removed until purchase.</small>';
}

// option = document.querySelector('select option')
item = document.querySelectorAll('.item');

for(let i=0; i<4;i++){
    item[i].addEventListener('click', update);
}
item[1].addEventListener('click', update);

var itemInput = document.querySelector("input[type='text'");
var form = document.querySelector('form');
var filter = document.getElementById('search');
itemInput.addEventListener('keydown', runEvent);



function runEvent(e){
    console.log('EVENT TYPE: '+e.type);
    
    // if(e.type == 'mouseenter'){
    //     i+=1
    //     box.innerHTML = '<h1>'+i+'</h1>'
    // }
    
    // output.innerHTML = '<small>Your Order for 100 '+Coin+' has been placed</small>';
}


// API FOR LISTING COINS


form.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
filter.addEventListener('keyup', filterItems)
function addItem(e){
    e.preventDefault();
    // Get input Value
    var newItem = document.getElementById('text').value;
    //Create new li element
    var li = document.createElement('li')
    li.className = '.item'
    li.appendChild(document.createTextNode(newItem))
    itemList.appendChild(li)
    var Delete = document.createElement('button')

    Delete.className = 'delbutton'
    Delete.appendChild(document.createTextNode('X'))
    li.appendChild(Delete)
}
  


function removeItem(e){
    let Coin = e.target.parentElement.innerText
    if (e.target.classList.contains('delbutton')){
        if (confirm('Are you sure you want to remove'+Coin+'?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
    
    
}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        // console.log(item.firstChild.textContent)
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }

    })
}