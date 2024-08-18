let counter = 1;
function addtodo(){
    const inputTask = document.querySelector('input');
    const inputValue = inputTask.value;

    const addTodo = document.createElement("p");
    addTodo.setAttribute('id',counter);
    addTodo.innerHTML = "<p>"+inputValue+"</p><button onclick='deleteTask("+counter+")'>Delete</button>"

    document.querySelector('body').appendChild(addTodo);
    counter = counter + 1;
}
function deleteTask(index)
{
    const deleteTodo = document.getElementById(index);
    deleteTodo.parentNode.removeChild(deleteTodo);
}
