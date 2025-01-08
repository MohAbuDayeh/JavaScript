const API_KEY = "22f646df766aad3031b2cda3a84b0498";
const baseURL = "https://api.openweathermap.org/data/2.5/weather";
const baseURLForecast = "https://api.openweathermap.org/data/2.5/forecast";

document.querySelector(".listcity").addEventListener("change", (event) => {
    const selectedCity = event.target.value;
    fetchWeather(selectedCity);
    fetchForecast(selectedCity); 
});

function fetchWeather(city) {
    fetch(`${baseURL}?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch weather data.");
            }
            return response.json();
        })
        .then(data => {
            updateUI(data);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

function fetchForecast(city) {
    fetch(`${baseURLForecast}?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch forecast data.");
            }
            return response.json();
        })
        .then(data => {
            updateForecastUI(data);
        })
        .catch(error => {
            console.error("Error fetching forecast data:", error);
        });
}

function updateUI(data) {
    const date = new Date();
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const day = date.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });

    document.querySelector(".date-dayname").textContent = dayName;
    document.querySelector(".date-day").textContent = day;
    document.querySelector(".location").textContent = `${data.name}, ${data.sys.country}`;
    document.querySelector(".weather-temp").textContent = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".weather-desc").textContent = data.weather[0].description;
    document.querySelector(".humidity-view").textContent = `${data.main.humidity} %`;
    document.querySelector(".wind-view").textContent = `${data.wind.speed} km/h`;

    const weatherMain = data.weather[0].main.toLowerCase();
    const weatherSide = document.querySelector(".weather-side");
    if (weatherMain.includes("cloud")) {
        weatherSide.style.backgroundImage = "url('cloud-image.jpg')";
    } else if (weatherMain.includes("rain")) {
        weatherSide.style.backgroundImage = "url('r.jpg')";
    } else if (weatherMain.includes("sun") || weatherMain.includes("clear")) {
        weatherSide.style.backgroundImage = "url('sun-image.jpg')";
    }
}
function updateForecastUI(data) {
    const weekList = document.querySelector(".week-list");
    weekList.innerHTML = ""; 

    let dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")); 

    const today = new Date().toLocaleDateString('en-US', { weekday: 'short' });

    
    dailyForecasts = dailyForecasts.sort((a, b) => {
        const dayA = new Date(a.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
        const dayB = new Date(b.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
        return dayA === today ? -1 : dayB === today ? 1 : 0;
    });

    dailyForecasts.forEach((forecast, index) => {
        if (index < 4) {
            const dayName = new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
            const temp = Math.round(forecast.main.temp);
            const weatherIcon = forecast.weather[0].main.toLowerCase();

            let iconClass = ""; 
            if (weatherIcon.includes("cloud")) {
                iconClass = "cloud";
            } else if (weatherIcon.includes("rain")) {
                iconClass = "cloud-rain";
            } else if (weatherIcon.includes("snow")) {
                iconClass = "cloud-snow";
            } else if (weatherIcon.includes("sun") || weatherIcon.includes("clear")) {
                iconClass = "sun";
            }

            const isActive = index === 0 ? "active" : ""; 

            const forecastItem = `
                <li class="${isActive}">
                    <i class="day-icon" data-feather="${iconClass}"></i>
                    <span class="day-name">${dayName}</span>
                    <span class="day-temp">${temp}°C</span>
                </li>
            `;
            weekList.innerHTML += forecastItem;

            
            if (dayName === today && index === 0) {
                document.querySelector(".date-dayname").textContent = dayName;
                document.querySelector(".weather-temp").textContent = `${temp}°C`;
                document.querySelector(".weather-desc").textContent = forecast.weather[0].description;

                const weatherMain = forecast.weather[0].main.toLowerCase();
                const weatherSide = document.querySelector(".weather-side");
                if (weatherMain.includes("cloud")) {
                    weatherSide.style.backgroundImage = "url('cloud-image.jpg')";
                } else if (weatherMain.includes("rain")) {
                    weatherSide.style.backgroundImage = "url('rain.jpg')";
                } else if (weatherMain.includes("sun") || weatherMain.includes("clear")) {
                    weatherSide.style.backgroundImage = "url('sun-image.jpg')";
                }
            }
        }
    });

    feather.replace();
}



fetchWeather("Paris");
fetchForecast("Paris");
