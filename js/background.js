//배경화면 랜덤 변경
const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)]; //사진 랜덤으로 보여줌.
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
//body에 html 추가
document.body.appendChild(bgImage);
