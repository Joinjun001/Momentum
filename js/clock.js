const clock = document.querySelector("h2#clock");


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//setInterval은 1초가 지난다음부터 출력되므로 바로 한번 함수를 실행시켜준다.

getClock();
setInterval(getClock, 1000);
 