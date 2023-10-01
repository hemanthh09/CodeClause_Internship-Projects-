const todolist = [{
    name: 'make dinner', 
    dueDate: '2023-07-13'
}, {
    name: 'wash dishes',
    dueDate: '2023-07-13'
}];

renderTodolist();

function renderTodolist() {

let todolistHTML = '';

todolist.forEach(function(todoObject, index) {

    const name = todoObject.name;
    const dueDate = todoObject.dueDate;

    const html = 
    `<div>${name}</div> 
    <div>${dueDate}</div>
    <button class="del-btn" onclick="
    todolist.splice(${index}, 1);
    renderTodolist();
    ">Delete</button>`;
    todolistHTML += html;
});

 
 document.querySelector('.js-todo-list')
 .innerHTML = todolistHTML;

}

function addTodo() {
   const inputElement = document.querySelector('.js-todolist');
   const name = inputElement.value;

   const dateInputElement = document.querySelector('.js-dueDate');

   const dueDate = dateInputElement.value;


   
   todolist.push({
    name: name,
    dueDate: dueDate
   });
   console.log(todolist);

   inputElement.value = '';

   renderTodolist();

}