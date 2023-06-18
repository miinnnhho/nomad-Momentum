
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //현재 내 위치를 알려줌
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; //표현
    });
}
function onGeoError() {
  alert("Can't find tou, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//getCurrentPosition get Two Argument , first : everything is all right, the other one: error
//https://openweathermap.org/ 사용
