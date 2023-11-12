const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

// 투두 저장
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 투두 삭제
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

// 투두 출력
function printToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    li.classList.add("toDoText")
    const span = document.createElement("span");
    span.innerText = newToDo.text+" ";
    const button = document.createElement("i");
    button.className = 'bx bx-x-circle'
    button.id = 'deleteButton'
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// 투두 입력
function toDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newToDoObj);
    printToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

// 시작 시 투두 출력

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(printToDo);
}