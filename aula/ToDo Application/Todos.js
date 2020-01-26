var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';

    for(todo of todos){
        var liElement = document.createElement('li');
        var liText = document.createTextNode(todo);
        
        var liLink = document.createElement('a');
        var LinkName = document.createTextNode('Excluir');
    
        var pos = todos.indexOf(todo);
        liLink.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        liLink.setAttribute('href', '#');
        
        liLink.appendChild(LinkName);
        liElement.appendChild(liText);
        liElement.appendChild(liLink);
        listElement.appendChild(liElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);

    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}