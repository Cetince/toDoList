let addButton = document.getElementById('toDoAdd');
let textSpace = document.getElementById('toDoText');
let clearButton = document.getElementById('toDoClear');
let toDoContainer = document.getElementById('toDoContainer');

addButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = textSpace.value;
    textSpace.value = "";

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through'
    });
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph)
    });

    clearButton.addEventListener('click', function(){
        paragraph.remove();
    })
    
})
