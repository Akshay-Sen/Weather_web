const inputBox = document.querySelector('.input-box')
const search_btn = document.querySelector('.btn')
const weather_body = document.querySelector('.weather-body')
const weather_img = document.querySelector('.weather-img')
const temprature = document.querySelector('.temprature')
const description = document.querySelector('.description')
const humidity = document.getElementById('humidity')
const wind_speed = document.querySelector('.wind-speed')
const location_not_found = document.querySelector('.location-not-found')

async function checkWeather(city) {
    const API_KEY = "596ead23761926ff7c4e905464491042"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    const weather_data = await fetch(`${URL}`).then(res => res.json()).catch(err => err);

    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex"
        weather_body.style.display = "none"
        return;
    }

    temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
    description.innerHTML = `${weather_data.weather[0].description}`
    humidity.innerHTML = `${weather_data.main.humidity}%`
    wind_speed.innerHTML = `${weather_data.wind.speed}km/H`

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "./assets/cloud.png"
            break;
        case 'Clear':
            weather_img.src = "./assets/clear.png"
            break;
        case 'Mist':
            weather_img.src = "./assets/mist.png"
            break;
        case 'Rain':
            weather_img.src = "./assets/rain.png"
            break;
        case 'Rain':
            weather_img.src = "./assets/rain.png"
            break;
        case 'Snow':
            weather_img.src = "./assets/snovy.png"
            break;
        case 'Haze':
            weather_img.src = "./assets/haze.png"
            break;
    }

    weather_body.style.display = "flex"
    location_not_found.style.display = "none"

    console.log(weather_data)
}

inputBox.addEventListener("keypress",(event) => {
    if (event.key === "Enter") {
        checkWeather(inputBox.value)
    }else {
        search_btn.addEventListener('click', () => {
                checkWeather(inputBox.value);
            })
    }
  });