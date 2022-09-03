const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//element를 js에서 만든다.
const bgImage = document.getElementById("backscreen");

bgImage.src = `img/${chosenImage}`;

/**  만든 element를 html의 body에 추가해준다. 
document.body.appendChild(bgImage); */