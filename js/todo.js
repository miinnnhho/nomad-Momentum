const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-toDolist");

const TODOS_KEY = "todos";

let toDos = [];
//database에 todo 내용 저장
//[]로 비어있으면 초기화가 됨(덮어씀)-> const를 let으로 바꿔서 업데이트가 가능하게 변경.

//todos 넣으면 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//todo 삭제 함수
function deleteToDo(event) {
  const li = event.target.parentElement; //뭘 지웠는지 봐야해서 사용
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== li.id);
}

//li, span을 만들고 텍스트를 입력하면 span에 들어가게 만들어줌.
function paintToDo(newTodo) {
  const li = document.createElement("li");
  //li 만들어줄거임
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span); //span을 li에 넣어줌
  li.appendChild(button); //button을 li에 넣어줌
  toDoList.appendChild(li); //todoList에 li넣어줌
} //이해 완료 ⭐️

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //user.text -> database (푸쉬함);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
