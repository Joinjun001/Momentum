const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function savedToDos() {
    // toDOs를 array 모양으로 저장하기 위해 JSON.stringify 를 사용해서 문자화 시켜줌.
    // 그냥 toDos를 넣으면 a,b,c, 로 가져오게 되는데 저렇게하면
    // ["a", "b", "c"] 이렇게 가져옴. 즉 array를 string으로 만들고 가져옴. 
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); 
    savedToDos();
}
// submit 
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); 
    li.appendChild(button);
    toDoList.appendChild(li);
}

// greeting에서 만들었던 함수를 만들어준다.
// preventDefault로 새로고침 안되게 막아주고, toDoInput 의 value를 저장함.

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    
    const newTodoObj = { //todo list에 id를 부여하기 위해 obj로 만들어줌. 
        text:newTodo,
        id : Date.now(),
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    savedToDos(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const saveToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) { //새로고침했는데 이미 todo리스트 있으면 paintTodo로 원래 있던
    // savedTodos를 paint 해주기 
    const parsedTodos = JSON.parse(saveToDos); //문자열로 만들었었던 array를 다시 
    // JSON.parse로 array로 바꿔줌
    toDos = parsedTodos; // localStorage에 덮어씌우지 않기 위함
    parsedTodos.forEach(paintToDo)  
}
