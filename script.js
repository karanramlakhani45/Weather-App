const apiKey = "YOUR_API_KEY_HERE";

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("weatherResult").innerHTML =
                    "<p>City not found</p>";
                return;
            }

            document.getElementById("weatherResult").innerHTML = `
                <h3>${data.name}</h3>
                <p>🌡 Temperature: ${data.main.temp} °C</p>
                <p>☁ Weather: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.log(error);
        });
}

