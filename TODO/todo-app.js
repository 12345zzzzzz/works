let button = document.createElement('button');
let input = document.createElement('input');
let i = 0;
(function() {
    //localStorage.clear();
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    function createTodoItemForm() {
        let form = document.createElement('form');
        let buttonWrapper = document.createElement('div');
        form.classList.add('input-group', 'mb-3')
        input.classList.add('form-control')
        input.placeholder = 'Введите название нового дела'
        buttonWrapper.classList.add('input-group-append')
        button.classList.add('btn', 'btn-primary')
        button.textContent = 'Добавить дело'
        button.disabled = true;
        buttonWrapper.append(button)
        form.append(input)
        form.append(buttonWrapper)
        return {
            form,
            input,
            button
        };
    }

    function createTodoList() {
        list = document.createElement('ul')
        list.classList.add('list-group')
        return list
    }

    function createTodoItem(name) {
        let item = document.createElement('li');
        let buttonGroup = document.createElement('div')
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;
        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger')
        deleteButton.textContent = 'Удалить';
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);
        return {
            item,
            doneButton,
            deleteButton,
        };
    }

    function createTodoApp(container, title, urgentList = false, todos) {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
        if (urgentList) {
            for (let i = 0; i <= urgentList.length - 1; ++i) {
                let todoItem = createTodoItem(urgentList[i]['name']);
                todoList.append(todoItem.item);
                todoItem.item.classList.toggle('list-group-item-success')
                todoItem.doneButton.addEventListener('click', function() {
                    todoItem.item.classList.toggle('list-group-item-success')
                });
                todoItem.deleteButton.addEventListener('click', function() {
                    if (confirm('Вы уверены?')) {
                        todoItem.item.remove();
                    }
                });
            }
        }
        lSlength = localStorage.length
        for (let n = 0; n < lSlength; ++n) {
            if (localStorage.getItem(todos + n) !== null) {
                let todoItem = createTodoItem(localStorage.getItem(todos + n));
                todoList.append(todoItem.item);
                todoItem.item.classList.toggle('list-group-item-success')
                todoItem.doneButton.addEventListener('click', function() {
                    todoItem.item.classList.toggle('list-group-item-success')
                });
                todoItem.deleteButton.addEventListener('click', function() {
                    if (confirm('Вы уверены?')) {
                        // localStorage.removeItem(todoItem.item);  
                        console.log(todoItem.item.textContent);
                        for (let n = 0; n < lSlength; ++n) {
                            if (localStorage.getItem(todos + n) + "ГотовоУдалить" === todoItem.item.textContent) {
                                console.log("можно удалять")
                                localStorage.removeItem(todos + n);
                            }
                        }
                        todoItem.item.remove();
                    }
                });
            }
        }
        todoItemForm.form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!todoItemForm.input.value) {
                return;
            }
            todoItem = createTodoItem(todoItemForm.input.value);
            //localStorage.setItem('key'+i, todoItemForm.input.value);
            localStorage.setItem(todos + i, JSON.stringify(todoItemForm.input.value));
            i++;
            todoItem.doneButton.addEventListener('click', function() {
                todoItem.item.classList.toggle('list-group-item-success')
            });
            todoItem.deleteButton.addEventListener('click', function() {
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove();
                }
            });
            todoList.append(todoItem.item);
            todoItemForm.input.value = '';
        });
    }
    window.createTodoApp = createTodoApp;
})();

function turnButton() {
    if (input.value.trimLeft() !== "") {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}
input.addEventListener('input', turnButton);
