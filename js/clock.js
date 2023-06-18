const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`; //시간 표현
}
getClock();
setInterval(getClock, 1000); //함수를 계속 호출 -> 실시간처럼 보임

// padStart(2,"0") -> (앞에 붙여줌)문자열의 길이가 2가 되면 좋겠고, 2가 안 된다면 0을 추가해줘
// padEnd는 뒤에 붙여줌
