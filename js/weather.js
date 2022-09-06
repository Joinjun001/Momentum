function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude; 
    const API_KEY = "fbaaaf8af94ca7d2abe0f7a18593c95a";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json().then(data => {
        const name = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        name.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }));
}

function onGeoErr() {
    alert("Can't find you! No wearther for you.")
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
