const API_KEY = './config.js';

document.getElementById('search-btn').addEventListener('click', getWeather);

async function getWeather() {
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value;

    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        
        // Update the UI with weather data
        document.getElementById('city').textContent = data.name;
        document.getElementById('temperature').textContent = 
            `${Math.round(data.main.temp)}°C`;
        document.getElementById('description').textContent = 
            data.weather[0].description;

    } catch (error) {
        alert(error.message);
    }
}

