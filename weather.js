const API_KEY = 'b055327dae4d168583157234fc2d9bf4'

function printWeather(data) {
    const weather = document.querySelector("#weatherIcon");
    const city = document.querySelector("#weather span:last-child");
    const temp = document.querySelector("#weather span:first-child");
    city.innerText = data.name;
    temp.innerText = `${Math.round(data.main.temp)} `;
    console.log(data.weather[0].main);
    if(data.weather[0].main==='Clouds') {
        weather.className = 'bx bxs-cloud'
    } else if(data.weather[0].main==='Rain') {
        weather.className = 'bx bxs-cloud-rain'
    } else if(data.weather[0].main==='Snow') {
        weather.className = 'bx bx-cloud-snow'
    } else {
        weather.className = 'bx bxs-sun'
    }
}

function GeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then(data => printWeather(data));
}

function GeoError() {
    alert("위치를 찾을 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);