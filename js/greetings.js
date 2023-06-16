const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("Button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; //오타 방지로 고정
// 자주 쓰는 건 대문자로 고정해놓으면 좋음
//(실수하고싶지 않은 string인 걸 상기시킴)
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  //정보가 없다면 null값 반환 -> if문 실행
  //show th form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show th greeting
  paintGreetings(savedUsername);
}

// 함수명() 에서 ()을 붙이는 건 -> 바로 실행한다는 뜻
