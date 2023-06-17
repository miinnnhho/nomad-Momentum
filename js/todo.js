const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

//todo 삭제 함수
function deleteToDO(event) {
  const li = event.target.parentElement; //뭘 지웠는지 봐야해서 사용
  li.remove();
}

//li, span을 만들고 텍스트를 입력하면 span에 들어가게 만들어줌.
function paintToDo(newTodo) {
  const li = document.createElement("li");
  //li 만들어줄거임
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDO);

  li.appendChild(span); //span을 li에 넣어줌
  li.appendChild(button); //button을 li에 넣어줌
  toDoList.appendChild(li); //todoList에 li넣어줌
} //이해 완료 ⭐️

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
