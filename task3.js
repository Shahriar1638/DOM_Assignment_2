function saveLists(lists) {
    localStorage.setItem('todoLists', JSON.stringify(lists));
}

function loadLists() {
    const stored = localStorage.getItem('todoLists');
    const lists = stored ? JSON.parse(stored) : [];
    console.log('Loaded lists:', lists);
    return lists;
}
function getLastTodoIndex() {
    const lists = loadLists();
    return lists.length > 0 ? lists[lists.length - 1].id : 0;
}
function addTodo() {
    const text = document.getElementById('todo-input').value.trim();
    console.log(text);
    if (!text) {
        alert('Please enter a task.');
        return false;
    }
    const lists = loadLists();
    const lastIndex = getLastTodoIndex();
    lists.push({ id: lastIndex + 1, text, status: 0 });
    saveLists(lists);
    displayTodos();
}

function removeTodo(idx) {
    const lists = loadLists();
    const updatedLists = lists.filter(todo => todo.id !== idx);
    saveLists(updatedLists);
    console.log(`Removed todo with id: ${idx}`);
}

function updateCheckBox(idx) {
    console.log(`Updating checkbox for item with id: ${idx}`);
    const lists = loadLists();
    const todo = lists.find(todo => todo.id === idx);
    if (todo) {
        todo.status = todo.status === 1;
        saveLists(lists);
        console.log(`Updated todo with id: ${idx}, new status: ${todo.status}`);
        displayTodos();
}}

function removeItem(idx) {
    console.log(`Removing item with id: ${idx}`);
    const lists = loadLists();
    const todo = lists.find(todo => todo.id === idx);
    if (todo) {
        removeTodo(idx);
        console.log(`Removed todo with id: ${idx}`);
        displayTodos();
    } else {
        console.error(`Todo with id: ${idx} not found`);
}}


function displayTodos() {
    const lists = loadLists();
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    lists.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.textContent = todo.text;
        const todoId = todo.id;

        const checkIcon = document.createElement('i');
        checkIcon.className = 'fa-solid fa-circle-check';
        checkIcon.style.color = (todo.status === 0) ? '#faf600' : '#00d084';
        checkIcon.style.cursor = 'pointer';
        checkIcon.style.marginLeft = '5px';
        if (todo.status === 0) {
            checkIcon.addEventListener('click', () => updateCheckBox(todoId));
        }

        const trashIcon = document.createElement('i');
        trashIcon.className = 'fa-solid fa-trash';
        trashIcon.style.color = '#f63737';
        trashIcon.style.marginLeft = '5px';
        trashIcon.style.cursor = 'pointer';
        trashIcon.addEventListener('click', () => removeItem(todoId));

        li.appendChild(checkIcon);
        li.appendChild(trashIcon);
        todoList.appendChild(li);
    });
}
displayTodos();